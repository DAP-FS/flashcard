<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DBMS Flashcards</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>DBMS Flashcards</h1>
        <div class="progress">
            <div class="progress-bar" id="progress-bar"></div>
            <span id="progress-text">0%</span> 
        </div>
        <div class="flashcard">
            <div class="flashcard-front" id="flashcard-front">
                <!-- Question goes here -->
            </div>
            <div class="flashcard-back" id="flashcard-back">
                <!-- Answer goes here -->
            </div>
        </div>
        <div class="buttons">
            <button id="prev-btn">Previous</button>
            <button id="flip-btn">Flip</button>
            <button id="next-btn">Next</button>
        </div>
    </div>


    <script src="script.js"></script>
</body>
</html>
