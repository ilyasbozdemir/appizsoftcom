## Kariyer Tablosu
### Tablo adı :  `careers`

Kariyerlerle ilgili bilgileri içeren tablo. Bu tabloyu kullanarak iş pozisyonlarını yönetebilirsiniz.

| Parametre        | Tür     | Zorunluluk | Açıklama                     | Örnek                               |
| ---------------- | ------- | ---------- | ---------------------------- | ----------------------------------- |
| `id`             | int     | Zorunlu    | Kariyer id                   | Unique ID, sistem tarafından otomatik olarak atanır. |
| `type`           | string  | Zorunlu    | Kariyer tipi                 | "Technology", "Design", "Shared Services" vb. |
| `title`          | string  | Zorunlu    | Kariyer başlığı              | "Full Stack Developer", "UX Designer" vb. |
| `pageLoc`        | string  | Zorunlu    | Sayfa konumu                 | Kariyer ilanının görüntüleneceği sayfanın adı. |
| `description`    | string  | Zorunlu    | Açıklama                     | Açılan pozisyon hakkında detaylı açıklama. |
| `requirements`   | array   | Zorunlu    | Gereksinimler listesi        | Gereken yetenekler ve niteliklerin bir listesi (dizi). |
| `location`       | string  | Zorunlu    | Konum bilgisi                | "Ankara, Türkiye" veya "Uzaktan" gibi pozisyonun fiziksel veya uzaktan konumunu belirtir. |
| `employmentType` | string  | Zorunlu    | İstihdam tipi                | "Tam Zamanlı", "Yarı Zamanlı" gibi istihdam türü. |
| `isOpen`         | boolean | Zorunlu    | Kariyer durumu (açık/kapalı) | True (açık) veya False (kapalı) değeri ile belirtilir. |

Bu tablo, iş pozisyonlarınızı tanımlamak ve ilan etmek için kullanılır.

### Kullanım Senaryoları

**1. Yeni Bir Kariyer İlanı Oluşturma**

Bir kullanıcı yeni bir kariyer ilanı oluşturmak istediğinde, aşağıdaki adımları takip edebilir:

- Kullanıcı, ilanın tipini (`type`), başlığını (`title`), sayfa konumunu (`pageLoc`), açıklamasını (`description`), gereksinimleri (`requirements`), konumunu (`location`), istihdam türünü (`employmentType`) ve ilanın açık/kapalı durumunu (`isOpen`) belirler.
- Kullanıcı bu bilgileri kullanarak POST `/api/v1/careers` endpointine bir istek gönderir.
- İlan başarıyla oluşturulduğunda, sistem yeni ilanın bir `id` değeri atar ve ilanı kaydeder.

**2. Tüm Kariyer İlanlarını Listeleme**

Tüm kariyer ilanlarını görüntülemek isteyen bir kullanıcı, aşağıdaki adımları takip edebilir:

- Kullanıcı GET `/api/v1/careers` endpointine bir istek gönderir.
- Sistem tüm açık kariyer ilanlarını listeler ve kullanıcıya döner.

**3. Belirli Bir Kariyer İlanını Görüntüleme**

Bir kullanıcı belirli bir kariyer ilanını görüntülemek isterse:

- Kullanıcı, istenen ilanın `id` değerini bilir.
- Kullanıcı GET `/api/v1/careers/{id}` endpointine bir istek gönderir.
- Sistem istenen ilanın ayrıntılarını kullanıcıya döner.

**4. Kariyer İlanını Güncelleme**

İlan sahibi bir kullanıcı, mevcut bir kariyer ilanını güncellemek isterse:

- Kullanıcı, güncellemek istediği ilanın `id` değerini bilir.
- Kullanıcı, güncellenmiş bilgileri (örneğin, `description`, `requirements` vb.) ile birlikte PUT `/api/v1/careers/{id}` endpointine bir istek gönderir.
- Sistem ilanı günceller ve kullanıcıya güncellenmiş ilanı döner.

**5. Kariyer İlanını Kapatma**

Bir kullanıcı bir kariyer ilanını kapatmak isterse:

- Kullanıcı, kapatmak istediği ilanın `id` değerini bilir.
- Kullanıcı, ilanın `isOpen` değerini `false` olarak güncellemek için PUT `/api/v1/careers/{id}` endpointine bir istek gönderir.
- Sistem ilanı kapatır ve kullanıcıya kapatılan ilanı döner.
