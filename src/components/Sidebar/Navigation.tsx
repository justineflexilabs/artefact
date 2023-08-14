import { List, ListItem } from '@chakra-ui/react';

import {
  AddInstallationIcon,
  ConditionIcon,
  ContactIcon,
  DashboardIcon,
  RequestAuditIcon,
  RequestValuationIcon,
  ValuationIcon,
} from '@public/icons/sidebar';
import useSidebarStore from '@/stores/useSidebarStore';

import NavigationItem from './NavigationItem';

const items = [
  {
    label: 'Dashboard',
    icon: DashboardIcon,
    path: '/',
  },
  {
    label: 'Condition Summary',
    icon: ConditionIcon,
    path: '/condition-summary',
  },
  {
    label: 'Valuation Summary',
    icon: ValuationIcon,
    path: '/valuation-summary',
  },
  {
    label: 'Add Installation',
    icon: AddInstallationIcon,
    path: '/add-installation',
  },
  {
    label: 'Request Valuation',
    icon: RequestValuationIcon,
    path: '/request-validation',
  },
  {
    label: 'Request Audit',
    icon: RequestAuditIcon,
    path: '/request-audit',
  },
  {
    label: 'Contact Us',
    icon: ContactIcon,
    path: '/contact-us',
  },
];

const Navigation: React.FC = () => {
  const isCollapsed = useSidebarStore((state) => state.isCollapsed);
  const activeIndex = useSidebarStore((state) => state.activeIndex);

  return (
    <List width="full" mb={isCollapsed ? 20 : 0}>
      {items.map((item, index) => (
        <ListItem key={index}>
          <NavigationItem
            item={item}
            isActive={index === activeIndex}
            isCollapsed={isCollapsed}
            index={index}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default Navigation;
