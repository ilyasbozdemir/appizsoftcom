## Projeler Tablosu

### Tablo adı : `projects`

Proje tablosu, müşterilere ait projeleri saklamak ve yönetmek için kullanılır.

| Parametre       | Tür     | Zorunluluk | Açıklama                 | Örnek                                |
| --------------- | ------- | ---------- | ------------------------ | ------------------------------------ |
| `project_id`    | int     | Zorunlu    | Proje kimliği (benzersiz) | unique id, sistem tarafından atanır  |
| `customer_id`   | int     | Zorunlu    | Projenin sahibi müşteri  | ilgili müşterinin kimliği (customer_id) |
| `title`         | string  | Zorunlu    | Proje başlığı            | Proje için başlık                   |
| `description`   | string  | Zorunlu    | Proje açıklaması         | Proje hakkında detaylı açıklama     |

### Kullanım Alanları

Proje tablosu, aşağıdaki senaryolarda kullanılabilir:

- Müşterinin sahip olduğu projeleri listeleme.
- Yeni bir proje oluşturma.
- Varolan bir projeyi güncelleme.
- Bir projeyi silme.

### Proje API Kullanım Alanları

## Proje Oluşturma (Create Project):
- Kullanım: Yeni bir proje oluşturmak için kullanılır.
- HTTP Yöntemi: `POST`
- Endpoint: `/api/v1/projects`
- Parametreler: Proje bilgileri (``title``, ``description``, vb.)
- Örnek Kullanım: Yeni bir proje oluşturmak için projenin ayrıntılarını gönderin.
## Proje Listeleme (List Projects):

- Kullanım: Tüm projeleri veya belirli bir kullanıcının projelerini listelemek için kullanılır.
- HTTP Yöntemi: `GET`
- Endpoint: `/api/v1/projects`
- Parametreler: Kullanıcı kimliği (isteğe bağlı)
- Örnek Kullanım: Tüm projeleri listeleyin veya belirli bir kullanıcının projelerini görüntülemek için kullanıcı kimliğini belirtin.

## Proje Detayları (Project Details):

- Kullanım: Belirli bir projenin ayrıntılarını almak için kullanılır.
- HTTP Yöntemi: GET
- Endpoint: /api/v1/projects/{``project_id``}
- Parametreler: Proje kimliği (``project_id``)
- Örnek Kullanım: Belirli bir projenin ayrıntılarını almak için proje kimliğini belirtin.

## Proje Güncelleme (Update Project):

- Kullanım: Varolan bir projeyi güncellemek için kullanılır.
- HTTP Yöntemi: ``PUT`` veya `PATCH`
- Endpoint: `/api/v1/projects/{project_id}`
- Parametreler: Proje kimliği (``project_id``) ve güncellenecek bilgiler
- Örnek Kullanım: Bir projenin ayrıntılarını güncellemek için proje kimliğini ve güncel bilgileri belirtin
## Proje Silme (Delete Project):
- Kullanım: Bir projeyi silmek için kullanılır.
- HTTP Yöntemi: `DELETE`
- Endpoint: `/api/v1/projects/{project_id}`
- Parametreler: Proje kimliği (project_id)
- Örnek Kullanım: Bir projeyi silmek için proje kimliğini belirtin.