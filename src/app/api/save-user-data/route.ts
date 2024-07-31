// app/api/save-user-data/route.ts
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/auth-options";
import { google } from 'googleapis';

const SPREADSHEET_ID = process.env.SPREADSHEET_ID!;
const SHEET_NAME = "Sheet1"; // Replace with your actual sheet name
const SLIDE_ID = "18kr48JvRcEyeBo9IOlvadRfPIH27debHy1-xUM6M6x8";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const name = session.user.name ?? "Unknown";
  const email = session.user.email ?? "No email provided";
  const userId = session.user.id ?? "error";

  try {
    const auth = new JWT({
      email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      key: process.env.GOOGLE_SHEETS_PRIVATE_KEY!.replace(/\\n/g, "\n"),
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive",
      ],
    });

    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, auth);
    await doc.loadInfo();
    
    const sheet = doc.sheetsByTitle[SHEET_NAME];
    if (!sheet) {
      throw new Error(`Sheet "${SHEET_NAME}" not found`);
    }

    const rows = await sheet.getRows();
    const userExists = rows.some(row => row.get('userId') === userId);

    if (!userExists) {
      // Add user to spreadsheet
      await sheet.addRow({ userId, email, name });

      // Add user as viewer to the Google Slides presentation
      const drive = google.drive({ version: 'v3', auth });
      await drive.permissions.create({
        fileId: SLIDE_ID,
        requestBody: {
          role: 'reader',
          type: 'user',
          emailAddress: email,
        },
      });
    }

    return NextResponse.json({ message: "User data processed successfully" });
  } catch (error) {
    console.error("Error processing user data:", error);
    return NextResponse.json({ error: "Failed to process user data" }, { status: 500 });
  }
}
// // app/api/save-user-data/route.ts
// import { GoogleSpreadsheet } from "google-spreadsheet";
// import { JWT } from "google-auth-library";
// import { NextRequest, NextResponse } from "next/server";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "../auth/[...nextauth]/auth-options";

// export async function POST(req: NextRequest) {
//   const session = await getServerSession(authOptions);

//   if (!session || !session.user) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }

//   const name = session.user.name ?? "Unknown";
//   const email = session.user.email ?? "No email provided";

//   try {
//     const auth = new JWT({
//       email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
//       key: process.env.GOOGLE_SHEETS_PRIVATE_KEY!.replace(/\\n/g, "\n"),
//       scopes: ["https://www.googleapis.com/auth/spreadsheets"],
//     });

//     const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID!, auth);
//     await doc.loadInfo();
    
//     const sheet = doc.sheetsByIndex[0];
//     await sheet.addRow({ 
//       name, 
//       email, 
//       signInTime: new Date().toISOString(),
//       userId: session.user.id
//     });

//     return NextResponse.json({ message: "User data saved successfully" });
//   } catch (error) {
//     console.error("Error saving user data:", error);
//     return NextResponse.json({ error: "Failed to save user data" }, { status: 500 });
//   }
// }