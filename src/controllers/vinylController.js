const Vinyl = require('../models/vinyl');

module.exports = {
    create: async (req, res) => {
        
        const {title, year, artist, condition} = req.body;
        try {
            const vinyl = await Vinyl.create({
                title,
                year, 
                artist,
                condition
            });
            return res.status(201).json(vinyl);
        } catch (err) {
            return res.status(400).json({Error: 'Error creating Vinyl'});
        }
    },
    getOne: async (req, res) => {
        const id = req.params.id;
        try {
            const vinyl = await Vinyl.findById(id);
            return res.status(200).json (vinyl);
        } catch (err) {
            return res.status(404).json({Error: 'Vinyl not found'});
        }
    },
    getAll: async (req, res) => {

    },
    update: async (req, res) => {

    },
    delete: async (req, res) => {

    } 
}