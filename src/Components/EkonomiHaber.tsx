import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import HaberWrapper from "./HaberWrapper";

type HaberVeri = {
  author: string | null;
  content: string | null;
  description: string | null;
  source: {
    id: string | null;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string | null;
};

function EkonomiHaber() {
  const [haberler, setHaberler] = useState<HaberVeri[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3e9aee3997f94e2eb3b0e5d5bfdd0eee"
        );

        const data = await response.json();

        if (!data.articles) {
          console.error("Veri formatı hatalı:", data);
          return;
        }

        const haberListesi: HaberVeri[] = data.articles.map((item: any) => ({
          author: item.author,
          content: item.content,
          description: item.description,
          source: item.source,
          title: item.title,
          url: item.url,
          urlToImage: item.urlToImage,
        }));

        setHaberler(haberListesi);
      } catch (error) {
        console.error("Haberler alınamadı:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="home-wrapper">
      <SideBar />

      <div className="haber-container">
        <h1>EKONOMİ HABERLERİ</h1>
        <hr /> <br />
        {loading ? (
          <p style={{ textAlign: "center" }}>Haberler yükleniyor...</p>
        ) : (
          <HaberWrapper haberler={haberler} />
        )}
      </div>
    </div>
  );
}

export default EkonomiHaber;
