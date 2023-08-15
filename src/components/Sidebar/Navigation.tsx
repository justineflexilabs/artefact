import { List, ListItem } from '@chakra-ui/react';
import { useRouter } from 'next/router';

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
  const route = useRouter();

  return (
    <List width="full" marginBottom={isCollapsed ? 10 : 0}>
      {items.map((item, index) => (
        <ListItem key={index}>
          <NavigationItem
            item={item}
            isActive={route.pathname === item.path}
            isCollapsed={isCollapsed}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default Navigation;
