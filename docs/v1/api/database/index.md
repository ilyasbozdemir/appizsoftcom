# Proje Dökümantasyonu - Versiyon 1

Bu döküman, projenizin versiyon 1'ine dair önemli bilgileri içerir.

## İçindekiler

- [Proje Kurulumu](#kurulum)
- [Veritabanı Ayarı](#Veritabanı)

## Kurulum

Projenin nasıl kurulacağına dair bilgileri bu bölümde bulabilirsiniz.

### Adım-1: Proje Klonlama

Önce projeyi bilgisayarınıza klonlayın:

```bash
    git clone https://github.com/ilyasBozdemir/appizsoftcom-backend-api
```

### Adım 2: Bağımlılıkları Yükleme

Proje dizininde bağımlılıkları yükleyin::

```bash
   dotnet restore
```

### Adım 3: Projeyi Çalıştırma

Projeyi çalıştırmak için:

```bash
  dotnet run
```

## Veritabanı

Bu doküman, .NET Core ile PostgreSQL veritabanını bağlamak için gerekli adımları içermektedir.

### Adım 1: PostgreSQL Veritabanını Yükleyin

Öncelikle, PostgreSQL veritabanını bilgisayarınıza veya sunucunuza kurmanız gerekecektir. Resmi PostgreSQL web sitesinden uygun sürümü indirin ve kurulumu tamamlayın.

### Adım 2: PostgreSQL Bağlantısı İçin Konfigürasyon

Veritabanına bağlanmak için gereken bağlantı bilgilerini yapılandırmanız gerekecektir. Projenizin kök dizininde bir appsettings.json dosyası oluşturun veya var olanı açın ve aşağıdaki gibi düzenleyin:

```json
// Kodu kullanırken dikkatli olun.
{
  "ConnectionStrings": {
    "DefaultConnection": "Host=localhost;Port=5432;Database=mydatabase;Username=myusername;Password=mypassword;"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information"
    }
  },
  "AllowedHosts": "*"
}
```

### Adım 3: PostgreSQL Bağlantısını Kurun

Veritabanı bağlantısı oluşturmak için aşağıdaki adımları izleyebilirsiniz:
Net Core 7 örneği verilmiştir

Öncelikle, projeye gerekli NuGet paketlerini yüklememiz gerekiyor. Bu paketler, PostgreSQL sürücüsünü ve Entity Framework Core'u içerir.

```bash
dotnet add package Npgsql
dotnet add package Microsoft.EntityFrameworkCore.PostgreSQL
```

```csharp
//Program.cs
// Kodu kullanırken dikkatli olun.


// ...

using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

// ...


// ...// PostgreSQL bağlantısını oluştur
var optionsBuilder = new DbContextOptionsBuilder<MyContext>();
optionsBuilder.UseNpgsql("DefaultConnection");
var context = new MyContext(optionsBuilder.Options);

// ...

```

## Tebrikler!