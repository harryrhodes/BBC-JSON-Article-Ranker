<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
    <title>Thank You!</title>
  </head>
  <body>
    <div id="row">
        <div id="col-sm-12">
            <div id="container">
                <article id="formResults">
                    <h2>Thanks For Your Rating!</h1>
                    <p>Article 1 - <?php echo htmlspecialchars($_POST['article1Rate']); ?>*</p>
                    <p>Article 2 - <?php echo htmlspecialchars($_POST['article2Rate']); ?>*</p>
                    <p>Article 3 - <?php echo htmlspecialchars($_POST['article3Rate']); ?>*</p>
                    <p>Article 4 - <?php echo htmlspecialchars($_POST['article4Rate']); ?>*</p>
                    <p>Article 5 - <?php echo htmlspecialchars($_POST['article5Rate']); ?>*</p>
                </article>
            </div>
        </div>
    </div>
</body>
</html>
