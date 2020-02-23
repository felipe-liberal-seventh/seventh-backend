import mongoose from 'mongoose';

const MonitoringSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
    default: false
  },
  responseTime: {
    type: Number,
    required: true,
    default: null
  }
}, {
  timestamps: true
});

export default mongoose.model('Monitoring', MonitoringSchema);
