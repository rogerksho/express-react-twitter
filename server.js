const express = require('express')
const Twit = require('twit')
const app = express()
const port = process.env.PORT || 8080

const T = new Twit({
  consumer_key: 'M9sH0OSwidJ3tK2c2Y5gpQa8U',
  consumer_secret: 'HCYTKAUGYiaEVMOG2jj0LLP9RuvOdCUCue98l9N8mkgbdlo3m1',
  access_token: '7207442-GFHbOBcY9LCkrzQhkcuuwtUULOwbZMoGiAjAFzzdUO',
  access_token_secret: 't21nEWlLuNKh0cvwlcP3dvyPOA6tnM7Dee4hPHF1FDGPS',
  timeout_ms: 60 * 1000,
  strictSSL: true,
})

app.get('/user/:username', function(req, res) {
  T.get('statuses/user_timeline', { screen_name: req.params.username, count: 10 }, function (err, data, response) {
    return res.json({
      data: data
  })
  })
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})