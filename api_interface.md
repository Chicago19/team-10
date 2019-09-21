# API Interface

## Available Request URLs, Their Inputs, And Return Types

All requests support POST and GET.

### `\` - The Test One

**Inputs**: None taken, but if you send some, it'll stil work.
**Outputs**: `{"test": True}`

### `/calendar` - Read Calendar Information

**Inputs**: `cal_filter: search_query`, where `search_query` is a string.
**Outputs**: JSON of form:

```JSON
{
  "result": [
    {
      "attendees": [
        {
          "email": "host_email"
        },
        {
          "email": "guest_1_email"
        }
      ],
      "start": {
        "dateTime": "2019-09-21T16:00:00-05:00"
      }
    }
  ]
}
```

Note that other attributes are also present - reference https://developers.google.com/resources/api-libraries/documentation/calendar/v3/python/latest/calendar_v3.calendarList.html#list


### `/score` - Scores a user's exam

**Inputs**: `"answers": [1,1,2,4]`
**Outputs**: `{'score': score}`
