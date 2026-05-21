# validation-and-error-lab

## 1. Validation Strategy
- **Client-Side:** Provides immediate feedback to the user (e.g., checking for an `@` in an email field).
- **Server-Side:** Acts as the final security gate, ensuring that data is valid before reaching the database.
- **Rule:** Client-side is for **UX**, Server-side is for **Trust**.

## 2. Error Classification
| Error Type | Example Scenario |
| :--- | :--- |
| **Validation** | Empty required field |
| **Authentication** | Wrong password |
| **Authorization** | Normal user trying to access `/admin` |
| **System** | Database connection timeout |

## 3. Communication & Status Codes
- **Goal:** Messages must be clear, user-friendly, and actionable.
- **HTTP Status Code Mapping:**
  - `2xx`: Request successful.
  - `4xx`: Client Error (e.g., `400 Bad Request`, `401 Unauthorized`).
  - `5xx`: Server Error (e.g., `500 Internal Server Error`).

## 4. Best Practices
- Never rely solely on client-side validation; always re-verify on the server.
- Fail gracefully: Show helpful messages to the user while logging details internally.
- Avoid exposing technical stack traces to the end-user.
