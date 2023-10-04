import { APP_API_CONFIG } from '../api/app-api.config';
import { APP_CONFIG_VARS } from '../config_vars/app-config-vars.config';

export const APP_AUTH_CONFIG = {
  providers: {
    LARAVEL9: {
      enabled: APP_CONFIG_VARS.AUTH_PROVIDER_LARAVEL9_ENABLED,
      config: {
        base_path: APP_API_CONFIG.laravel9_api_base_path,
        token_refresh_time:
          APP_CONFIG_VARS.AUTH_PROVIDER_LARAVEL9_TOKEN_REFRESH_TIME,
      },
    },
    SUITECRM7: {
      enabled: APP_CONFIG_VARS.AUTH_PROVIDER_SUITECRM7_ENABLED,
      config: {
        base_path: APP_API_CONFIG.suitecrm7_api_base_path,
        client_id: APP_CONFIG_VARS.AUTH_PROVIDER_SUITECRM7_CLIENT_ID,
        client_secret: APP_CONFIG_VARS.AUTH_PROVIDER_SUITECRM7_CLIENT_SECRET,
        user_module_name:
          APP_CONFIG_VARS.AUTH_PROVIDER_SUITECRM7_USER_MODULE_NAME,
        token_refresh_time:
          APP_CONFIG_VARS.AUTH_PROVIDER_SUITECRM7_TOKEN_REFRESH_TIME,
      },
    },
    OAUTH2_SOCIAL_GOOGLE: {
      enabled: APP_CONFIG_VARS.AUTH_PROVIDER_OAUTH2_SOCIAL_GOOGLE_ENABLED,
      config: {
        androidClientId:
          APP_CONFIG_VARS.AUTH_PROVIDER_OAUTH2_SOCIAL_GOOGLE_ANDROID_CLIENT_ID,
        clientId:
          APP_CONFIG_VARS.AUTH_PROVIDER_OAUTH2_SOCIAL_GOOGLE_WEB_CLIENT_ID,
        scopes: APP_CONFIG_VARS.AUTH_PROVIDER_OAUTH2_SOCIAL_GOOGLE_SCOPES.split(
          ','
        ).map((i) => i.trim()),
        grantOfflineAccess:
          APP_CONFIG_VARS.AUTH_PROVIDER_OAUTH2_SOCIAL_GOOGLE_GRANT_OFFLINE_ACCESS,
      },
    },
    /*
    OAUTH2_SOCIAL_FACEBOOK: {
      enabled: APP_CONFIG_VARS.AUTH_PROVIDER_OAUTH2_SOCIAL_FACEBOOK_ENABLED,
      config: {
        web_client_id: '', // APP_ENV_CONFIG.CORE_AUTH_FACEBOOK_WEB_CLIENT_ID,
        fb_login_options: '', // APP_ENV_CONFIG.CORE_AUTH_FACEBOOK_LOGIN_OPTIONS
      },
    },
    OAUTH2_KEYCLOAK: {
      enabled: APP_CONFIG_VARS.AUTH_PROVIDER_OAUTH2_KEYCLOAK_ENABLED,
      config: {
        // Url of the Identity Provider
        issuer: 'http://localhost:8080/auth/realms/myrealm',

        // URL of the SPA to redirect the user to after login
        redirectUri: window.location.origin,

        // The SPA's id. The SPA is registerd with this id at the auth-server
        // clientId: 'server.code',
        clientId: 'my-mobile-app-client',

        // Just needed if your auth server demands a secret. In general, this
        // is a sign that the auth server is not configured with SPAs in mind
        // and it might not enforce further best practices vital for security
        // such applications.
        // dummyClientSecret: 'secret',

        responseType: 'code',

        // set the scope for the permissions the client should request
        // The first four are defined by OIDC.
        // Important: Request offline_access to get a refresh token
        // The api scope is a usecase specific one
        scope: 'openid profile email offline_access',

        showDebugInformation: true,

        requireHttps: false,
      },
    },
    */
    MOCKED_USER_DATA: {
      enabled: APP_CONFIG_VARS.AUTH_PROVIDER_MOCKED_USER_DATA_ENABLED,
    },
  },
};
