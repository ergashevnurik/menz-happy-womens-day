<!DOCTYPE html>
<html>
    <head>
        <title>8th of March</title>
        <!-- Link Styling Goes Here -->
        <link rel="stylesheet" href="../static/css/style.css">
        <!-- Link Styling Ends Here -->

        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta charset="utf-8">
    </head>
    <body>
        <main>
            
            <!-- Hero Section Goes Here -->
            <section id="hero">
                <div class="col">
                    <h1 id="title">Please Enter Name</h1>
                    <div class="form-group">
                        <input type="text" placeholder="Enter Your Name..." name="name" id="user-firstname">
                        <button id="enter-name">Enter</button>
                    </div>
                </div>
                
                <div class="container">
                    <div class="envelope" id="envelope">
                        <div class="cover top" id="envelopeTop">
                        </div>
                        <div class="cover bottom right" id="bottom-right">
                        </div>
                        <div class="cover left" id="left">
                        </div>
                        <div class="letter" id="contact">
                            Дорогая, <h3 id="received-user-name"></h3>поздравляю тебя с Международным женским днем! Желаю весеннего настроения, теплых отношений с родными и близкими, чистой искренней любви. Чтобы в твоей жизни получалось всё то, что ты хочешь. Внимания, заботы, трогательных моментов, душевных разговоров и встреч, приятных приобретений, развития и уверенности, реализации и востребованности, красоты, молодости, улыбок и множества всевозможных благ! Ты восхитительна! С праздником!
                        </div>
                    </div>
                </div>
                <!-- <div>
                    <div class="lines">
                        
                    </div> 
                </div> -->
            </section>
            <!-- Hero Section Ends Here -->

        </main>
    </body>

    <!-- JS Goes Here -->
    <script src="../static/js/index.js"></script>
    <script src="../static/js/lines.js"></script>
    <script src="../static/js/anime.min.js"></script>
    <!-- JS Ends Here -->

    <!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="/__/firebase/8.2.10/firebase-app.js"></script>

    <!-- TODO: Add SDKs for Firebase products that you want to use
        https://firebase.google.com/docs/web/setup#available-libraries -->
    <script src="/__/firebase/8.2.10/firebase-analytics.js"></script>

    <!-- Initialize Firebase -->
    <script src="/__/firebase/init.js"></script>
</html>