import {
  Box,
  IconButton,
  Snackbar,
  SnackbarCloseReason,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { Fragment, memo, useState } from "react";
import CustomSecondaryBtn from "../CustomSecondaryBtn";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { IProduct } from "../../interfaces";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import {
  cardProductSelector,
  handleChangeCardProduct,
  handleChangeLoveListProduct,
  loveListProductSelector,
} from "../../redux/page.slice";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../pages/router.config";

interface IProductCardProps extends IProduct {
  typeBtn?: "primary" | "secondary";
  isSlide?: boolean;
}

const ProductCard = ({
  typeBtn = "primary",
  isSlide = false,
  ...props
}: IProductCardProps) => {
  const { imgLink, price, title, id } = props;
  const dispatch = useDispatch();
  const loveListProduct = useSelector(loveListProductSelector);
  const isHaveProduct = loveListProduct.includes(id);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const cartProduct = useSelector(cardProductSelector);
  const isHaveProductCart = cartProduct.find((item) => item.id === id);

  const handleFavorite = () => {
    dispatch(
      handleChangeLoveListProduct(
        isHaveProduct
          ? loveListProduct.filter((item) => item !== id)
          : [...loveListProduct, id]
      )
    );
    setOpen(true);
  };

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Fragment>
  );

  const handleAddCart = () => {
    dispatch(
      handleChangeCardProduct([
        ...cartProduct,
        { ...props, selectedQuantity: 1, isSelected: true },
      ])
    );
  };
  const handleDetail = () => {
    navigate(`/${PATH.SHOP}/${PATH.DETAIL}`, { state: { to: id } });
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#fff",
          padding: "1rem",
          height: "326px",
          borderRadius: "0.5rem",
          marginInline: isSlide ? "0.45rem" : 0,
          cursor: "pointer",
        }}
        onClick={handleDetail}
      >
        <Stack gap={1} sx={{ position: "relative" }}>
          <img
            src={imgLink}
            alt="img"
            style={{ width: "100%", height: "50%", objectFit: "contain" }}
          />
          {title.length > 22 ? (
            <Tooltip title={title}>
              <Typography variant="body2">{`${title.slice(
                0,
                22
              )}...`}</Typography>
            </Tooltip>
          ) : (
            <Typography variant="body2">{title}</Typography>
          )}

          <Typography variant="body1" color="error">
            {price}
          </Typography>
          <div onClick={(e) => e.stopPropagation()}>
            <CustomSecondaryBtn
              type={typeBtn}
              onClick={handleAddCart}
              isHaveProductCart={!!isHaveProductCart}
            />
          </div>
          <div onClick={(e) => e.stopPropagation()}>
            <IconButton
              aria-label="Example"
              sx={{
                position: "absolute",
                top: "-0.25rem",
                right: "-0.25rem",
                cursor: "pointer",
              }}
              onClick={handleFavorite}
            >
              {isHaveProduct ? (
                <FavoriteIcon />
              ) : (
                <FavoriteBorderOutlinedIcon />
              )}
            </IconButton>
          </div>
        </Stack>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={
          isHaveProduct ? "Đã thêm vào yêu thích" : "Đã xoá khỏi yêu thích"
        }
        action={action}
      />
    </>
  );
};

export default memo(ProductCard);
