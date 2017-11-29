"use strict";

import mongoose from 'mongoose';

let Schema = mongoose.Schema;
module.exports = (() => {
    let ClassSchema = new Schema({
        class_name: {
            type: String,
            required: true
        },
        section_name: {
            type: String,
            required: false //for self study section is not required
        },
        is_active: {
            type: Boolean,
            default: true
        }
    })
});
