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

      const monitoring = await Monitoring.findOne({ url });

      if (monitoring) {
        return res.status(400).json({ error: 'Site already registered' });
      }

      const responseTime = await ResponseTime.get(url);

      const newMonitoring = await Monitoring.create({
        url,
        available: responseTime ? true : false,
        responseTime: responseTime ? responseTime : 0
      });

      return res.json(newMonitoring);
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

  async update(req, res) {
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

export default new MonitoringController();
