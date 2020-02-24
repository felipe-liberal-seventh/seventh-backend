import Monitoring from '../schemas/Monitoring';
import ResponseTime from '../../lib/ResponseTime';

class CheckAvailableController {
  async exec(req, res) {
    try {
      const monitorings = await Monitoring.find();

      for (const monitoring of monitorings) {
        const responseTime = await ResponseTime.get(monitoring.url);

        monitoring.available = responseTime ? true : false;
        monitoring.responseTime = responseTime ? responseTime : 0;

        await monitoring.save();
      }

      return res.json();
    } catch (err) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
}

export default new CheckAvailableController();