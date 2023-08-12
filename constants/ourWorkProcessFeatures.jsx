import { BiAnalyse } from "react-icons/bi";
import { MdEvent } from "react-icons/md";
import { SiMaterialdesignicons } from "react-icons/si";
import { HiCode } from "react-icons/hi";
import { AiOutlineBug } from "react-icons/ai";
import { GrDeploy, GrIntegration } from "react-icons/gr";
import { SlDoc } from "react-icons/sl";

export const ourWorkProcessFeatures = [
  {
    color: "teal", // Chakra UI teal color
    title: "İhtiyaç Analizi",
    icon: BiAnalyse,
    content:
      "Müşteri veya proje gereksinimlerini anlamak için detaylı bir analiz yapılır. Projenin amacını ve müşterinin isteklerini belirlemek için toplantılar düzenlenir ve dokümantasyonlar incelenir.",
  },
  {
    color: "purple", // Chakra UI purple color
    title: "Planlama",
    icon: MdEvent,
    content:
      "Analiz sonuçlarına dayanarak projenin genel bir planı oluşturulur. Proje süresi, kaynak gereksinimleri ve öncelikler belirlenir. Projenin başarı kriterleri ve hedefleri belirlenir.",
  },
  {
    color: "red", // Chakra UI red color
    title: "Tasarım",
    icon: SiMaterialdesignicons,
    content:
      "Bileşenin tasarımı oluşturulur. Kullanılacak teknolojiler seçilir, arayüzler ve veri yapıları tanımlanır. Bileşenin nasıl çalışacağına dair bir plan yapılır ve gerekli arayüzlerin prototipleri oluşturulur.",
  },
  {
    color: "blue", // Chakra UI blue color
    title: "Kodlama",
    icon: HiCode,
    content:
      "Bileşenin tasarımı oluşturulur. Kullanılacak teknolojiler seçilir, arayüzler ve veri yapıları tanımlanır. Bileşenin nasıl çalışacağına dair bir plan yapılır ve gerekli arayüzlerin prototipleri oluşturulur.",
  },
  {
    color: "yellow", // Chakra UI yellow color
    title: "Birleştirme ve Entegrasyon",
    icon: GrIntegration,
    content:
      "Tasarıma dayalı olarak bileşenlerin kodlanması ve oluşturulması gerçekleştirilir.",
  },
  {
    color: "cyan", // Chakra UI cyan color
    title: "Test ve Hata Ayıklama",
    icon: AiOutlineBug,
    content:
      "Bileşenin testi yapılır ve hata ayıklama süreci uygulanır. İşlevsel testler, birim testleri ve bütünleşik testler gibi farklı test aşamaları kullanılır. Hatalar tanımlanır, izlenir ve düzeltilir.",
  },
  {
    color: "orange", // Chakra UI orange color
    title: "Dökümantasyon",
    icon: SlDoc,
    content:
      "Bileşenin kullanımını ve kurulumunu anlatan detaylı bir kullanıcı kılavuzu ve geliştirici belgeleri oluşturulur. Bileşenin çalışma prensipleri ve gereksinimleri açıklanır. Kod dokümantasyonu da unutulmaz.",
  },
  {
    color: "teal", // Chakra UI teal color
    title: "Dağıtım ve Sürdürme",
    icon: GrDeploy,
    content:
      "Bileşen canlı ortama dağıtılır ve kullanıma hazır hale getirilir. Sürekli bakım ve güncelleme için bir sürdürme planı oluşturulur. Kullanıcı geri bildirimleri takip edilir ve sorunları gidermek için düzeltmeler yapılır.",
  },
];
