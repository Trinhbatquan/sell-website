import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Card,
  CardMedia,
  CardContent,
  Button,
  Divider,
  Container,
  ListItemButton,
  Collapse,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import news4 from "../../../assets/news/news4.png";
import news5 from "../../../assets/news/news5.png";
import news6 from "../../../assets/news/news6.png";
import news7 from "../../../assets/news/news7.png";
import news8 from "../../../assets/news/news8.png";
import news9 from "../../../assets/news/news9.png";
import detail1 from "../../../assets/news/detail1.png";
import detail2 from "../../../assets/news/detail2.png";
import { Slide } from "react-slideshow-image";
import { getProductListById } from "../../../constants";
import { ProductCard } from "../../../components";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { PATH } from "../../router.config";

interface NewsItem {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

const News: React.FC = () => {
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(
    {
      "Cổ điển": false,
      "Hiện đại": false,
      "Đơn giản": false,
      "Sang trọng": false,
    }
  );

  const state = useLocation()?.state;
  const isDetail = !!state && state?.to === "detail";
  const navigate = useNavigate();

  const newsItems = [
    {
      date: "20/11/2024",
      title: "Hướng dẫn tự decor phòng ngủ đẹp và chuẩn phong thủy 2024",
      image: news4,
    },
    {
      date: "20/11/2024",
      title: "Ghế sofa bộ rồi phù hợp với không gian phòng khách nào?",
      image: news5,
    },
    {
      date: "20/11/2024",
      title: "Bí quyết chọn Sofa cho phòng khách nhỏ",
      image: news6,
    },
  ];

  const newsList: NewsItem[] = [
    {
      title: "Hướng dẫn tự decor phòng ngủ đẹp và chuẩn phong thuỷ 2024",
      description:
        "Bạn đang tìm kiếm ý tưởng decor phòng ngủ? Bạn muốn tham khảo những cách trang trí phòng ngủ đẹp và chuẩn phong thuỷ? Tham khảo hướng dẫn decor phòng ngủ dưới đây để dễ dàng tự tạo ý tưởng trang trí...",
      imageUrl: news4,
      date: "27/11/2024",
    },
    {
      title: "Ghế sofa bộ rời phù hợp với không gian phòng khách nào?",
      description:
        "Những bộ ghế sofa rời mang lại tiện ích riêng. Hãy tìm hiểu kiểu dáng, thiết kế của những bộ ghế sofa rời nhưng không biết cách phù hợp với phòng khách nhà bạn...",
      imageUrl: news5,
      date: "27/11/2024",
    },
    {
      title: "Bí quyết chọn Sofa cho phòng khách nhỏ",
      description:
        "Với không gian phòng khách nhỏ, việc lựa chọn sofa trở nên không đơn giản đối với nhiều gia đình. Hãy để chúng tôi giúp bạn giải quyết mọi lo ngại này...",
      imageUrl: news6,
      date: "27/11/2024",
    },
    {
      title: "4 nguyên tắc lựa chọn đèn trang trí bạn nên biết",
      description:
        "Việc thiết kế hệ thống đèn chiếu sáng trở nên rất quan trọng. Không chỉ đảm bảo ánh sáng đầy đủ, bạn cần có tính thẩm mỹ phù hợp...",
      imageUrl: news7,
      date: "27/11/2024",
    },
    {
      title: "Ý tưởng trang trí cây giả trong nội thất xu hướng hot",
      description:
        "Cây giả decor đã trở thành một phần quan trọng trong việc không gian xanh. Với sự tiện lợi và tính thẩm mỹ cao...",
      imageUrl: news8,
      date: "27/11/2024",
    },
    {
      title: "Nội thất gỗ sồi - sự giao thoa của vẻ đẹp và chất lượng",
      description:
        "Hãy khám phá chất liệu gỗ sồi cao cấp, một phần không thể thiếu trong các xu hướng nội thất hiện đại...",
      imageUrl: news9,
      date: "27/11/2024",
    },
  ];

  const handleToggleCategory = (category: string) => {
    setOpenCategories((prev: any) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const ProductContainer = styled.div`
    .react-slideshow-container {
      .nav:first-of-type {
        left: -10px;
      }
      .nav:last-of-type {
        right: -6px;
      }
      button.nav {
        padding: 0.5rem;
        width: 31px;
        height: 31px;
        background-color: rgb(212 212 212 / 60%);
      }
    }
  `;

  const handleNewsClick = () => {
    navigate(`/${PATH.SHOP}/${PATH.NEWS_DETAIL}`, { state: { to: "detail" } });
  };

  const articleTitle =
    "Hướng dẫn tự decor phòng ngủ đẹp và chuẩn phong thủy 2024";

  const sections = [
    {
      title: "1. Lưu ý trước khi decor phòng ngủ",
      content: [
        "Decor phòng ngủ không chỉ đơn giản là làm đẹp mà còn phải đảm bảo không gian thoải mái, dễ chịu và giúp bạn thư giãn sau một ngày làm việc vất vả.",
        "Hãy ưu tiên sử dụng các màu sắc trung tính và các vật liệu tự nhiên để tạo sự gần gũi, dễ chịu. Tránh sử dụng đồ nội thất và phụ kiện quá lớn gây cảm giác chật chội.",
      ],
      image: detail1,
    },
    {
      title: "2. Lựa chọn đồ decor nội thất và chuẩn phong thủy",
      content: [
        "2.1. Bố trí giường ngủ decor phòng ngủ: Giường ngủ cần đặt sao cho hài hòa với ánh sáng tự nhiên. Đầu giường phải tựa lên bề mặt chắc chắn, giúp tạo cảm giác an toàn.",
        "2.2. Phối màu khi decor phòng ngủ: Nên chọn các màu sắc nhẹ nhàng như trắng, xám hoặc pastel để không gian trở nên thoáng đãng hơn. Hạn chế dùng màu quá đậm hoặc quá nóng vì có thể gây mất cân bằng năng lượng.",
      ],
      image: detail2,
    },
  ];

  return (
    <ProductContainer>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            padding: 3,
            gap: 3,
            my: 3,
          }}
        >
          {/* Sidebar Section */}
          <Box sx={{ width: { xs: "100%", md: "25%" } }}>
            {/* Categories */}
            {/* Categories Section */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h6"
                sx={{
                  bgcolor: "#2D5246",
                  color: "white",
                  textAlign: "center",
                  py: 1,
                  borderRadius: 1,
                }}
              >
                DANH MỤC
              </Typography>
              <List>
                {Object.keys(openCategories).map((category) => (
                  <React.Fragment key={category}>
                    <ListItemButton
                      onClick={() => handleToggleCategory(category)}
                      sx={{ py: 1 }}
                    >
                      <ListItemText primary={category} />
                      {openCategories[category] ? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      )}
                    </ListItemButton>
                    <Collapse
                      in={openCategories[category]}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        <ListItem sx={{ pl: 4 }}>
                          <ListItemText primary="Subcategory 1" />
                        </ListItem>
                        <ListItem sx={{ pl: 4 }}>
                          <ListItemText primary="Subcategory 2" />
                        </ListItem>
                      </List>
                    </Collapse>
                  </React.Fragment>
                ))}
              </List>
            </Box>

            <Divider />

            {/* News Section */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  my: 2,
                }}
              >
                Tin tức mới
              </Typography>
              {newsItems.map((news, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 2,
                    cursor: "pointer",
                  }}
                  onClick={handleNewsClick}
                >
                  <img
                    src={news.image}
                    alt={news.title}
                    style={{
                      width: 60,
                      height: 60,
                      objectFit: "cover",
                      borderRadius: 8,
                      marginRight: 16,
                    }}
                  />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      {news.date}
                    </Typography>
                    <Typography variant="body2">{news.title}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* News Section */}
          {isDetail ? (
            <Box
              sx={{
                maxWidth: 800,
                margin: "auto",
                p: 2,
                bgcolor: "#FFF8F0",
                borderRadius: 2,
                boxShadow: 1,
              }}
            >
              {/* Article Title */}
              <Typography variant="h4" gutterBottom textAlign="center">
                {articleTitle}
              </Typography>
              <Divider sx={{ mb: 3 }} />

              {/* Article Sections */}
              {sections.map((section, index) => (
                <Box key={index} sx={{ mb: 4 }}>
                  <Typography variant="h6" gutterBottom>
                    {section.title}
                  </Typography>
                  {section.image && (
                    <img
                      src={section.image}
                      alt={section.title}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: 8,
                        marginBottom: 16,
                      }}
                    />
                  )}
                  {section.content.map((paragraph, idx) => (
                    <Typography
                      key={idx}
                      variant="body1"
                      gutterBottom
                      sx={{ textAlign: "justify" }}
                    >
                      {paragraph}
                    </Typography>
                  ))}
                </Box>
              ))}
            </Box>
          ) : (
            <Box sx={{ width: { xs: "100%", md: "70%" }, ml: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  marginBottom: 2,
                  color: "#2F4F4F",
                }}
              >
                TIN TỨC
              </Typography>

              {/* News Cards */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                  gap: 2,
                }}
              >
                {newsList.map((news, index) => (
                  <Card
                    key={index}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      boxShadow: 2,
                      borderRadius: 2,
                      overflow: "hidden",
                      cursor: "pointer",
                    }}
                    onClick={handleNewsClick}
                  >
                    <CardMedia
                      component="img"
                      height="150"
                      image={news.imageUrl}
                      alt={news.title}
                    />
                    <CardContent>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", marginBottom: 1 }}
                      >
                        {news.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#555555", marginBottom: 2 }}
                      >
                        {news.description}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>

              {/* Load More Button */}
              <Box textAlign="center" marginTop={3}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#FFCC80",
                    color: "#fff",
                    textTransform: "none",
                    padding: "10px 20px",
                    "&:hover": { backgroundColor: "#FFB74D" },
                  }}
                >
                  Xem thêm
                </Button>
              </Box>
            </Box>
          )}
        </Box>
        <Typography variant="h3" sx={{ mt: 5, mb: 3, textAlign: "center" }}>
          SẢN PHẨM GỢI Ý
        </Typography>
        <Slide
          slidesToScroll={1}
          slidesToShow={4}
          indicators={false}
          duration={4000}
          autoplay={false}
        >
          {getProductListById([1, 3, 5, 7, 9, 11]).map((item) => (
            <ProductCard {...item} isSlide key={item.id} />
          ))}
        </Slide>
      </Container>
    </ProductContainer>
  );
};

export default News;
