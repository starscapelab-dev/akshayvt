# Google Sheets Integration Setup

This guide will help you set up the contact form to save submissions to your Google Sheet.

## Step 1: Open Your Google Sheet

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/16orTB10-dDEUoJdm0jfMLeSJP8fzRAFJAMomb-B7lmg/edit
2. Make sure you have edit access to this sheet

## Step 2: Set Up Column Headers

In the first row of your sheet, add these column headers (if not already present):

| A | B | C | D | E | F | G | H | I | J |
|---|---|---|---|---|---|---|---|---|---|
| Timestamp | Name | Email | Phone | Company | Services | Timeline | Source | Budget | Message |

## Step 3: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code in the editor
3. Paste the following code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);

    // Prepare row data in the same order as headers
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.company || '',
      data.services || '',
      data.timeline || '',
      data.source || '',
      data.budget || '',
      data.message || ''
    ];

    // Append the row to the sheet
    sheet.appendRow(rowData);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (💾 icon) and name your project (e.g., "Contact Form Handler")

## Step 4: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: Contact Form Webhook (optional)
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. Review permissions:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** → **Go to [Project Name] (unsafe)**
   - Click **Allow**
7. Copy the **Web app URL** (it will look like: `https://script.google.com/macros/s/XXXXXXX/exec`)

## Step 5: Add URL to Environment Variables

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add this line with your Web app URL:

```env
NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Replace `YOUR_SCRIPT_ID` with the actual URL you copied in Step 4.

## Step 6: Test the Integration

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Go to the contact page: http://localhost:3000/contact
3. Fill out the form and submit
4. Check your Google Sheet - you should see a new row with the form data
5. You should be redirected to the thank you page

## Troubleshooting

### Form submits but data doesn't appear in Google Sheets

- Make sure the Web app URL in `.env.local` is correct
- Check that the Apps Script deployment is set to "Anyone" for access
- Open the Apps Script editor and check **Executions** (clock icon) for error logs

### "Authorization required" error

- Redeploy the web app with the correct permissions
- Make sure you clicked "Allow" when authorizing

### Data appears in wrong columns

- Double-check that your Google Sheet headers match exactly:
  - Timestamp, Name, Email, Phone, Company, Services, Timeline, Source, Budget, Message

## Optional: Email Notifications

If you want to receive email notifications when someone submits the form, add this to your Apps Script:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.company || '',
      data.services || '',
      data.timeline || '',
      data.source || '',
      data.budget || '',
      data.message || ''
    ];

    sheet.appendRow(rowData);

    // Send email notification
    const emailBody = `
New contact form submission:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Company: ${data.company}
Services: ${data.services}
Timeline: ${data.timeline}
Source: ${data.source}
Budget: ${data.budget}

Message:
${data.message}

---
Submitted at: ${data.timestamp}
    `;

    MailApp.sendEmail({
      to: "info@akshayvt.com", // Change this to your email
      subject: `New Contact Form: ${data.name}`,
      body: emailBody
    });

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

After adding this code, click **Deploy** → **Manage deployments** → Click the edit icon (✏️) → **Version**: New version → **Deploy**
