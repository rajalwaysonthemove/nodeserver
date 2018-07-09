const router = require('express').Router();

function getData(){
    const num = 13
    return new Promise((resolve, reject) => {
        if (num>10) {
            resolve(10)
        } else {
            reject(10)
        }
    })
}

router.get('/', (req, res) => {
  res.status(200).send("api root")
});

router.post('/', (req, res) => {
  res.status(200).send(req.body)
});

router.get('/promise', (req, res) => {
  
    getData().then(function(result) {
        userDetails = result;
        console.log("Initialized user details");
        // Use user details from here
        console.log(userDetails)
        res.status(200).json(userDetails)
    }, function(err) {
        console.log(err);
        res.status(500).json(err)
    })
});
function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    var result = await getData();
    console.log(result);
  }
router.get('/await', async (req, res) => {
    await asyncCall();
    res.status(500).json('await222')
});

module.exports = router;