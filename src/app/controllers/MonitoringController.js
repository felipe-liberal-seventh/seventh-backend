import * as Yup from 'yup';

import Monitoring from '../schemas/Monitoring';
import ResponseTime from '../../lib/ResponseTime';

class MonitoringController {
  async store(req, res) {
    try {
      const schema = Yup.object().shape({
        url: Yup.string().required().url()
      });

      const bodyIsValid = await schema.isValid(req.body);

      if (!bodyIsValid) {
        return res.status(400).json({ error: 'Url invalid' });
      }

      const { url } = req.body;

      const responseTime = await ResponseTime.get(url);

      const monitoring = await Monitoring.create({
        url,
        available: true,
        responseTime
      });

      return res.json(monitoring);
    } catch (err) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  async index(req, res) {
    try {
      const monitorings = await Monitoring.find();

      return res.json(monitorings);
    } catch (err) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
}

export default new MonitoringController();