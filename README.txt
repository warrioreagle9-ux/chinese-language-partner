# Chinese Language Partner — Version 0.1

This is the first working prototype of the personal Chinese Language Partner app.

## Included
- Home dashboard
- HSK 1–5 selector
- Topic filters
- Noun / Verb / Adjective filters
- Vocabulary cards
- Chinese + pinyin + English
- 3 example sentences per starter word
- Chinese text-to-speech
- Mark words as mastered (saved in browser)
- Reading passages with pinyin + English
- Tap-to-open dictionary for supported words
- Real-life roleplay scenarios
- Basic chat partner
- PWA manifest + service worker for an app-like iPhone experience

## Run on Windows
1. Extract this folder.
2. Open a terminal in the folder.
3. Run one of these commands if Python is installed:
   `py -m http.server 8000`
   or
   `python -m http.server 8000`
4. Open `http://localhost:8000` on your PC.

For iPhone installation, the app needs to be served over HTTPS on a reachable website. A simple local PC server is good for desktop testing, but not by itself for installing on an iPhone.

## Next development step
Replace the guided roleplay/chat responses with a real AI backend, then expand the vocabulary database to the full HSK 1–5 curriculum.
