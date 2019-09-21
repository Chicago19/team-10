from __future__ import print_function
import datetime
import pickle
import os.path
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
import os

os.chdir("./calendar_integration")

SCOPES = ['https://www.googleapis.com/auth/calendar.events']

class Session:
    def __init__(self):
        creds = None
        if os.path.exists('token.pickle'):
            with open('token.pickle', 'rb') as token:
                creds = pickle.load(token)
        if not creds or not creds.valid:
            if creds and creds.expired and creds.refresh_token:
                creds.refresh(Request())
            else:
                flow = InstalledAppFlow.from_client_secrets_file(
                    'credentials.json', SCOPES)
                creds = flow.run_local_server(port=0)
            with open('token.pickle', 'wb') as token:
                pickle.dump(creds, token)

        self.session = build('calendar', 'v3', credentials=creds)

    def search_events(self, query):
        now = datetime.datetime.utcnow().isoformat() + 'Z'
        events_result = self.session.events().list(calendarId='primary', timeMin=now,
                                            maxResults=25, singleEvents=True,
                                            orderBy='startTime').execute()
        events = events_result.get('items', [])
        filtered_events = []
        for event in events:
            if query.lower().strip() in event['summary'].lower():
                filtered_events.append(event)
        # Reference: https://developers.google.com/resources/api-libraries/documentation/calendar/v3/python/latest/calendar_v3.calendarList.html#list
        return filtered_events

if __name__ == "__main__":
    for event in calendar_session.search_events("oral"):
        print(event['summary'])
