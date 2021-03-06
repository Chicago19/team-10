↑# API Interface

## Available Request URLs, Their Inputs, And Return Types

All requests support POST and GET.

### `\` - The Test One

**Inputs**: None taken, but if you send some, it'll still work.

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

### `/create_profile` - Creates a user's profile

**Inputs**:

```JSON
{
  "name": "full name",
  "email": "email address",
  "referral": "referral name",
  "phone": "phone number",
  "password": "plaintext_password",
  "age": "age"
}
```
**Outputs**: `{'return': 'Boolean'}`


### `/auth_path` - Authenticate a user

**Inputs**:
```JSON
{
  "email": "email",
  "password": "password"
}
```
**Outputs**: `{"result": boolean}`

### `/email_test` - Check if an account already exists

**Inputs**: `{"email": "email_address"}`

**Outputs**: `{"result": boolean}`

### `/view_class_score` - View a user's class score

**Inputs**:

```JSON
{
  "email": "string",
  "class_name": "string",
  "class_year": "string",
  "class_semester": "string"
}
```

**Outputs**:
If success: `{"score": score}`. If fail: `{"score": "error"}`

### `/update_class_score` - Update a user's score in a class

**Inputs**:
```JSON
{
  "email": "string",
  "class_name": "string",
  "class_year": "string",
  "class_semester": "string",
  "score": "Integer"
}
```

**Outputs**:
  `{"result": bool}`

### `write_class_score` - Write a user's class score

**Inputs**:
```JSON
{
  "email": "string",
  "class_name": "string",
  "class_year": "string",
  "class_semester": "string",
  "score": "Integer"
}
```

**Outputs**:
  `{"result": bool}`

### `./written_exam_score` - Update a user's written exam score.

**Inputs** -
```json
{
"email": "string",
"answers": ["b", "c", "a", "a", "d", "a"]
}
```
Note - case and whitespace insensitive in input

**Output** - `{"score": "integer", "class": "string"}`, or `{"result": False}`

### `./user_classes` - Return a user's classes.

**Inputs** -
```json
{
  "request_type": ["all","current"],
  "email": "string"
}
```

**Output** -

```json
{
  "class_name": [
    "class1",
    "class2",
    "..."
  ]
}
```

### `./view_profile` - Returns user profile information

**Input**: `{"email": "string"}`

**Output**:
```JSON
{
  "name": "string",
  "email": "string",
  "referral": "string",
  "phone": "string",
  "age": "string"
}
```
