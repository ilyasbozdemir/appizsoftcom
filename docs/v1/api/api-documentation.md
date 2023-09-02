# Appizsoft Yazılım API Dokümantasyonu

- Bu dökümantasyon, Appizsoft Yazılım projesinin Web API'sinin kullanımını ve özelliklerini açıklar ve
  bu API dokümantasyonuna erişim için belirli gereksinimler vardır ve kullanıcının yetkilendirilmesi gerekebilir.

## Genel Bilgiler

- **Base URL:** `https://api.appizsoft.com/api/v1/`

## Versiyonlar

API, sürümleme için ayrı klasörler kullanır. Şu anki API sürümü: `v1`

## Kimlik Doğrulama (Authentication)

API dokümantasyonunu görüntülemek ve API endpointlerine erişmek için JWT (JSON Web Token) kimlik doğrulaması gereklidir. Bu, güvenlik ve yetkilendirme sağlamak amacıyla kullanılır.

JWT, kullanıcının kimliğini doğrulamak ve yetkilendirmek için kullanılır. Kullanıcı girişi yaptığında veya kaydolduğunda JWT tokeni alır ve bu tokeni API isteklerinde kullanır.

### Tokenin Geçerliliği

JWT tokenleri, belirli bir süre boyunca geçerlidir. Token süresi sunucu tarafından belirlenir ve süre dolduğunda token geçersiz hale gelir. Bu nedenle, tokenin süresi dolduğunda yeni bir token alınması gerekebilir.

### Yetkilendirme

API endpointlerine erişim, JWT içindeki rol ve izinlere dayalı olarak kontrol edilir. Her kullanıcıya atanmış bir veya birden fazla rol vardır ve bu roller, belirli işlemleri gerçekleştirmek için yetkilendirme sağlar.

Örnek Yetkilendirme İstemi:

```http
GET /api/v1/users
Authorization: Bearer your_jwt_token_here
```

Bu açıklama, API dokümantasyonuna erişim gereksinimlerini ve JWT'nin nasıl kullanıldığını anlatır. Kullanıcılar, bu gereksinimleri karşılayarak API dokümantasyonunu görüntüleyebilir ve API endpointlerine erişebilirler.

jwt için örnek kullanım için [Örnek Jwt dosyasına](jwt) göz atın

## Dökümantasyon İçeriği

### <span style="text-decoration: underline;">Veritabanı tablo ve sütunlar şeması</span>

- [Veritabanı Şeması](database/index.md)

#### <span style="text-decoration: underline;">API kullanımı</span>

- [Kimlik Doğrulama API](data-fetching/authentication/index.md)
- [Harici Kimli Doğrulama API](data-fetching/authentication/OAuth.md)
- [Kimlik Doğrulama için Bilgi](data-fetching/authentication/README.md)

#### <span style="text-decoration: underline;">Kullanıcılar API</span>

- [Kullanıcı API ](data-fetching/user.md)

#### <span style="text-decoration: underline;">Kariyer API</span>

- [Kariyer API](data-fetching/careers.md)

#### <span style="text-decoration: underline;">Auth API</span>

- [Auth API](data-fetching/auth.md)

#### <span style="text-decoration: underline;">Customers API</span>

- [Customer API](data-fetching/customers.md)
#### <span style="text-decoration: underline;">Companies API</span>

- [Company  API](data-fetching/companies.md)
#### <span style="text-decoration: underline;">Projects  API</span>

- [Company  API](data-fetching/projects.md)

<br/>

# [not data devamı yazılcaktır.]