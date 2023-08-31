## Harici Kimlik Sağlayıcıyla Giriş ve .NET Core API Entegrasyonu

Aşağıda, Next.js ile harici kimlik sağlayıcılar (örneğin Google, GitHub, LinkedIn) ile giriş yapma işleminin nasıl .NET Core API ile entegre edilebileceğini anlatan adımları bulabilirsiniz:

1. **Giriş İşlemi:**
   - Kullanıcı Next.js uygulamasına giriş yapar.
   - Harici kimlik sağlayıcının giriş işlemi tamamlanır.
   - Next.js, harici kimlik sağlayıcının döndürdüğü token veya bilgileri alır.

2. **API'ye Veri Gönderme:**
   - Next.js, aldığı token veya kullanıcı bilgilerini .NET Core API'ye bir istekle gönderir.
   - Bu isteğin bir örnek URL'si: `POST /api/auth/external-login`.

3. **İşleme Alma (.NET Core API):**
   - .NET Core API, Next.js'den gelen isteği alır.
   - Gelen token veya kullanıcı bilgileri işlenir.
   - Kullanıcı oturumu oluşturulur veya güncellenir.

Bu yaklaşımı kullanarak, giriş işlemlerini Next.js üzerinde gerçekleştirebilir ve sadece oturum bilgilerini .NET Core API'ye gönderebilirsiniz. Ancak, .NET Core API tarafında gelen bilgileri doğrulamak, kullanıcı oturumunu yönetmek ve gerektiğinde yeni bir oturum oluşturmak gibi ek işlemleri gerçekleştirmeniz gerekebilir.
