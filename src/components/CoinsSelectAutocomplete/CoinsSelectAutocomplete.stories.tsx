import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Route, Routes } from 'react-router-dom';
import { BackToHomeHelperText } from '../BackToHomeHelperText';
import { CoinsSelectAutocomplete } from './CoinsSelectAutocomplete';

const meta: ComponentMeta<typeof CoinsSelectAutocomplete> = {
  component: CoinsSelectAutocomplete,
  parameters: {
    reactRouter: {
      initialEntries: ['/test/coins-select-autocomplete'],
      RouteComponent({ children }: { children: React.ReactNode }) {
        return (
          <Routes>
            <Route path="/:env/coins-select-autocomplete" element={children} />
          </Routes>
        );
      },
    },
  },
};

export default meta;

export const Testnet: ComponentStoryObj<typeof CoinsSelectAutocomplete> = {
  args: {
    helperText: <BackToHomeHelperText env={'test'} />,
  },
};

export const Mainnet: ComponentStoryObj<typeof CoinsSelectAutocomplete> = {
  args: {
    helperText: <BackToHomeHelperText env={'prod'} />,
  },
  parameters: {
    reactRouter: {
      initialEntries: ['/prod/coins-select-autocomplete'],
    },
  },
};
