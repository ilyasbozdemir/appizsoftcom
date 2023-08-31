# Kimlik Doğrulama API Dokümantasyonu

Bu dokümantasyon, harici kimlik sağlayıcılarıyla (Google, Facebook, Twitter,GitHub,LinkedIn  ) kimlik doğrulama entegrasyonunu açıklar.

## Harici Kimlik Sağlayıcılarıyla Giriş

### Google ile Giriş

Google hesabınızı kullanarak sisteme giriş yapmak için, aşağıdaki adımları izleyin:

1. Uygulamanızı Google Developer Console'da kaydettikten sonra, OAuth 2.0 istemci kimliği ve istemci sırrını alın.
2. Kullanıcıyı Google'a yönlendirin: `GET /api/v1/auth/google`
3. Google, kullanıcıyı kimlik doğrulama istemcisine yönlendirir.
4. Kimlik doğrulama istemcisinden alınan erişim kodu ile kullanıcı kimliği alın: `POST /api/v1/auth/google/callback`

### Facebook ile Giriş

Facebook hesabınızı kullanarak sisteme giriş yapmak için, aşağıdaki adımları izleyin:

1. Uygulamanızı Facebook Developers'ta kaydettikten sonra, App ID ve App Secret alın.
2. Kullanıcıyı Facebook'a yönlendirin: `GET /api/v1/auth/facebook`
3. Facebook, kullanıcıyı kimlik doğrulama istemcisine yönlendirir.
4. Kimlik doğrulama istemcisinden alınan erişim kodu ile kullanıcı kimliği alın: `POST /api/v1/auth/facebook/callback`

### Twitter ile Giriş

Twitter hesabınızı kullanarak sisteme giriş yapmak için, aşağıdaki adımları izleyin:

1. Uygulamanızı Twitter Developer Portal'da kaydettikten sonra, API Key ve API Secret Key alın.
2. Kullanıcıyı Twitter'a yönlendirin: `GET /api/v1/auth/twitter`
3. Twitter, kullanıcıyı kimlik doğrulama istemcisine yönlendirir.
4. Kimlik doğrulama istemcisinden alınan erişim kodu ile kullanıcı kimliği alın: `POST /api/v1/auth/twitter/callback`

## GitHub ile Giriş

GitHub hesabınızı kullanarak sisteme giriş yapmak için, aşağıdaki adımları izleyin:

1. GitHub Developer settings'ten bir OAuth App oluşturun ve Client ID ile Client Secret alın.
2. Kullanıcıyı GitHub'a yönlendirin: `GET /api/v1/auth/github`
3. GitHub, kullanıcıyı kimlik doğrulama istemcisine yönlendirir.
4. Kimlik doğrulama istemcisinden alınan erişim kodu ile kullanıcı kimliği alın: `POST /api/v1/auth/github/callback`

---

## LinkedIn ile Giriş

LinkedIn hesabınızı kullanarak sisteme giriş yapmak için, aşağıdaki adımları izleyin:

1. LinkedIn Developer Platform'dan bir uygulama oluşturun ve Client ID ile Client Secret alın.
2. Kullanıcıyı LinkedIn'a yönlendirin: `GET /api/v1/auth/linkedin`
3. LinkedIn, kullanıcıyı kimlik doğrulama istemcisine yönlendirir.
4. Kimlik doğrulama istemcisinden alınan erişim kodu ile kullanıcı kimliği alın: `POST /api/v1/auth/linkedin/callback`



---

## Harici Kimlik Sağlayıcılarıyla Giriş ve API Entegrasyonu

Aşağıda, harici kimlik sağlayıcılar (Google, GitHub, LinkedIn) ile giriş yapma işleminin nasıl .NET Core API ile entegre edilebileceğini adım adım bulabilirsiniz:

1. **Giriş İşlemi:**
   - Kullanıcı Next.js uygulamasına giriş yapar.
   - Harici kimlik sağlayıcının giriş işlemi tamamlanır.
   - Next.js, harici kimlik sağlayıcının döndürdüğü token veya bilgileri alır.

2. **API'ye Veri Gönderme:**
   - Next.js, aldığı token veya kullanıcı bilgilerini `.NET Core API`'ye gönderir.
   - Bu isteğin bir örnek URL'si: `POST /api/auth/external-login`.

3. **İşleme Alma (.NET Core API):**
   - `.NET Core API`, Next.js'den gelen isteği alır.
   - Gelen token veya kullanıcı bilgileri işlenir.
   - Kullanıcı oturumu oluşturulur veya güncellenir.

Bu yaklaşımı kullanarak, giriş işlemlerini Next.js üzerinde gerçekleştirip sadece oturum bilgilerini `.NET Core API`'ye gönderebilirsiniz. Ancak, `.NET Core API` tarafında gelen bilgileri doğrulamak, kullanıcı oturumunu yönetmek ve gerektiğinde yeni bir oturum oluşturmak gibi ek işlemleri gerçekleştirmeniz gerekebilir.





**Not:** Bu belge sadece temel bilgileri içerir. Entegrasyonu gerçekleştirmek için ilgili kimlik sağlayıcıların belgelerini dikkatlice incelemelisiniz.
