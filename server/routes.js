

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
