const base = '/data/2.5/weather';
const domain = 'openweathermap.org';
const Defaults = {
  appName: 'weatherTest',
  domain,
  defaultLocale: {
    lang: 'en'
  },
  app: {
    platforms: ['ios', 'android']
  },
  apis: {
    baseUrl: `http://api.${domain}${base}`,
    APPID: '5c630aa5fd148dba7ae1e7fcba4f6501',
    public: {
      base: `${base}`,
      backend: `${base}`
    },
    user: {
      base: `${base}`,
      login: `${base}/login`,
      logout: `${base}/logout`
    }
  }
};

export default Defaults;
