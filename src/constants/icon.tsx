import {
  RiApps2AiLine,
  RiFlowerLine,
  RiGroupLine,
  RiImageAddLine,
  RiInformationLine,
  RiMenuLine,
  RiSettings3Line,
  RiTerminalBoxLine,
} from '@remixicon/react';
import { ReactNode } from 'react';

/**
 * @description: Gitee 图标
 */
export const GiteeFill = ({ fill = 'currentColor', size = 20 }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
      <path
        fill={fill}
        d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.59.59 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z"
      />
    </svg>
  );
};

/**
 * @description: 菜单图标映射
 */
export const MenuIconMap: Record<string, ReactNode> = {
  RiApps2AiLine: <RiApps2AiLine size={18} />,
  RiInformationLine: <RiInformationLine size={18} />,
  RiFlowerLine: <RiFlowerLine size={18} />,
  RiTerminalBoxLine: <RiTerminalBoxLine size={18} />,
  RiImageAddLine: <RiImageAddLine size={18} />,
  RiSettings3Line: <RiSettings3Line size={18} />,
  RiGroupLine: <RiGroupLine size={18} />,
  RiMenuLine: <RiMenuLine size={18} />,
};
