import React from 'react';
import { ListItem, Typography, Box } from '@mui/material';
import Link from 'next/link';
import { grey } from '@mui/material/colors';
import { CustomNavigation } from '@/utils/navigation';

interface NestedListItemProps {
  item: CustomNavigation;
  prevSegment: string;
  pathname: string;
}

const NestedListItem: React.FC<NestedListItemProps> = ({ item, prevSegment, pathname }) => {
  const href = `${prevSegment}/${item.segment}`;
  const isActive = href === pathname;
  const hasChildren = item.children && item.children.length > 0;

  return (
    <React.Fragment>
      {hasChildren ? (
        <ListItem>
          <Typography fontWeight={700}>{item.title}</Typography>
        </ListItem>
      ) : (
        <ListItem component={Link} href={href} sx={{ background: isActive ? grey[300] : 'transparent' }}>
          <Typography color={grey[800]}>{item.title}</Typography>
        </ListItem>
      )}
      {hasChildren && (
        <Box sx={{ pl: 2 }}>
          {item.children && item.children.length > 0 && item.children.map((child) => (
            <NestedListItem key={child.title} item={child} prevSegment={`${prevSegment}/${item.segment}`} pathname={pathname} />
          ))}
        </Box>
      )}
    </React.Fragment>
  );
};

export default NestedListItem;
