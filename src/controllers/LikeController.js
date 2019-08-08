const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {

        const { user } = req.headers;
        const { devId } = req.params;
        
        const loggetDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if(!targetDev) {
            return res.status(400).json({ error: 'Dev not existis'});
        }        

        if(targetDev.likes.includes(loggetDev._id)){
            console.log('DEU MATCH');
        }
        loggetDev.likes.push(targetDev._id);
        await loggetDev.save();

        return res.json(loggetDev);
    }
};