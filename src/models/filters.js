import mongoose from 'mongoose';

const filtersSchema = new mongoose.Schema(
    {
        // e.g. "Language", "Subject", "Duration"
        filterName: {
          type: String,
          required: true,
          trim: true,
          unique: true,          // each filter category appears once
        },
    
        // array of option strings
        options: {
          type: [String],        // ["English", "Spanish", ...]
          default: [],
          validate: {
            validator: (arr) => arr.every((opt) => typeof opt === 'string'),
            message: 'All options must be strings',
          },
        },
      },
      {
        collection: 'filtertopics', // map to existing collection name
        timestamps: true,           // adds createdAt / updatedAt
      }
);

const FilterModel = mongoose.model('FilterTopic', filtersSchema);

export default FilterModel;