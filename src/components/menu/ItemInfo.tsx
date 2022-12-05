// import {
//   Dialog,
//   DialogContent,
//   DialogTitle,
//   Slide,
//   Typography,
// } from '@mui/material';
// import { TransitionProps } from '@mui/material/transitions';
// import React from 'react';
// import { ItemInfoType } from '../../types/menu';

// const Transition = React.forwardRef(function Transition(
//   props: TransitionProps & {
//     children: React.ReactElement<any, any>;
//   },
//   ref: React.Ref<unknown>
// ) {
//   return <Slide direction='up' ref={ref} {...props} />;
// });

// function ItemInfo({ menuItem, open, onClose }: ItemInfoType) {
//   return (
//     <Dialog open={open} onClose={onClose} TransitionComponent={Transition}>
//       <DialogTitle>Item Details</DialogTitle>
//       <DialogContent dividers>
//         <Typography>Item Title: {menuItem.title_en}</Typography>
//         <Typography>Category: {menuItem.category}</Typography>
//         <Typography>Prices: {menuItem.price}</Typography>
//         <Typography>
//           Additional Diet Info: {menuItem.additionalDietInfo?.allergens}
//         </Typography>
//       </DialogContent>
//     </Dialog>
//   );
// }

// export default ItemInfo;

export {};
