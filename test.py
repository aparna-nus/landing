import requests
import pandas as pd

query = """
{
  lend {
    loans(limit: 1000) {
      values {
        id
        name
        loanAmount
        status
        sector {
          name
        }
        geocode {
          latitude
          longitude
        }
      }
    }
  }
}
"""

response = requests.post(
    'https://api.kivaws.org/graphql',
    json={'query': query}
)

# Debug: Check what we got back
print(f"Status code: {response.status_code}")
print(f"Response text: {response.text[:500]}")  # First 500 characters

# Only try to parse JSON if we got a 200 status
if response.status_code == 200:
    try:
        data = response.json()
        print(data)
    except:
        print("Failed to parse JSON")
        print(f"Full response: {response.text}")
else:
    print(f"Request failed with status {response.status_code}")