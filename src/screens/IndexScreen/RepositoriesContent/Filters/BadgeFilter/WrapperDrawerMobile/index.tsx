import { Drawer, IconButton } from "@mui/material";
import Image from "next/image";

export default function WrapperDrawerMobile({
  open,
  handleClose,
  filterName,
  children,
}: {
  open: boolean;
  handleClose: () => void;
  filterName: string;
  children?: React.ReactNode;
}) {
  return (
    <Drawer anchor="bottom" open={open} onClose={handleClose}>
      <div className="w-full p-6">
        <div className="mb-4 flex items-center justify-between">
          <h4 className="text-lg font-bold">{filterName}</h4>

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
              width={24}
              height={24}
            />
          </IconButton>
        </div>

        {children}
      </div>
    </Drawer>
  );
}
