# 🔥 DailyDiction

**DailyDiction** is a smart vocabulary booster that helps users learn a new English word every day with:
- ✅ Synonyms & Antonyms
- ✅ Example Sentences
- ✅ Daily Email Reminders
- ✅ Streak Tracking and Word History

Whether you're a student, writer, or just a word nerd — DailyDiction keeps your vocab sharp and your brain sharper.

---

## ✨ Features

- 🧠 Word of the Day fetched from Wordnik API
- 🔥 Fire animation and streak tracker to build habit
- 📬 Email notifications (automated daily)
- 🗂️ History of learned words
- 💌 User subscription form
- ⚙️ Backend built with Python + Flask
- 📤 Automated email sending using Gmail SMTP (or SendGrid)

---

## 🚀 How It Works

1. Users subscribe with their email
2. Backend stores emails in JSON/DB
3. Cron job runs daily → fetches a word → sends email notification
4. Frontend displays the word with style ✨

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Python + Flask
- **Email:** SMTP (or SendGrid)
- **Scheduler:** Python `schedule` / cron (Render)
- **Database:** JSON or SQLite
- **Deployment:** Render (backend) + GitHub Pages / Netlify (frontend)

---

## 📸 Screenshots

_Add some screenshots here of your UI and the email preview._

---

## 🌐 Live Site

👉 [Visit DailyDiction](https://your-deployed-url.com)

---

## 🤝 Contributing

Pull requests are welcome! For major changes, open an issue first.

---

## 📄 License

This project is licensed under the MIT License.
