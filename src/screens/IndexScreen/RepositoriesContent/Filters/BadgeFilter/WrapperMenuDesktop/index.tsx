import { IconButton, Menu } from "@mui/material";
import Image from "next/image";

export default function WrapperMenuDesktop({
  open,
  handleClose,
  anchorEl,
  filterName,
  children,
}: {
  open: boolean;
  handleClose: () => void;
  anchorEl: null | HTMLElement;
  filterName: string;
  children?: React.ReactNode;
}) {
  return (
    <Menu
      id={`menu-desktop-filters-badge-${filterName}`}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      sx={{
        ".MuiPaper-root": {
          background:
            "linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(89.89deg, rgba(0, 86, 166, 0.05) -30.01%, rgba(5, 135, 255, 0.05) 125.65%)",
        },
      }}
      slotProps={{
        list: {
          "aria-labelledby": `menu-desktop-filters-badge-${filterName}`,
        },
      }}
    >
      <div className="w-[256px] px-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium">Selecione o(a) {filterName}</h4>

          <IconButton
            title="Fechar menu"
            className="flex-shrink-0"
            size="small"
            onClick={handleClose}
          >
            <Image
              quality={100}
              draggable={false}
              src="/assets/icons/icone_x_vermelho.svg"
              alt="Fechar"
              width={18}
              height={18}
            />
          </IconButton>
        </div>

        {children}
      </div>
    </Menu>
  );
}
