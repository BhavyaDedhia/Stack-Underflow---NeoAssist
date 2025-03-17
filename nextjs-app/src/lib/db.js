import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://127.0.0.1:27017/userprofiles';

if (!mongoose.connections[0].readyState) {
  mongoose.connect(MONGODB_URI);
}

export default mongoose; 