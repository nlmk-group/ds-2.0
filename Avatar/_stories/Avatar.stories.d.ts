import React from 'react';
import { IAvatarProps } from '../../Avatar/types';
import { AvatarShape, AvatarSize } from '../enums';
declare const _default: {
    title: string;
    component: React.FC<IAvatarProps>;
    decorators: ((Story: () => any) => JSX.Element)[];
    argTypes: {
        size: {
            description: string;
            table: {
                defaultValue: {
                    summary: AvatarSize;
                };
                type: {
                    summary: string;
                };
            };
            options: AvatarSize[];
            control: {
                type: string;
            };
        };
        shape: {
            description: string;
            table: {
                defaultValue: {
                    summary: AvatarShape;
                };
                type: {
                    summary: string;
                };
            };
            options: AvatarShape[];
            control: {
                type: string;
            };
        };
        imageSrc: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        userName: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        userSurname: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        online: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        numberIndicator: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        badgeIconName: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const AvatarDefault: {
    (argsTypes: IAvatarProps): JSX.Element;
    storyName: string;
};
export declare const DefaultAvatarsWithSizes: {
    (argsTypes: IAvatarProps): JSX.Element;
    storyName: string;
};
export declare const AvatarOnline: {
    (argsTypes: IAvatarProps): JSX.Element;
    storyName: string;
    args: {
        online: boolean;
    };
};
export declare const AvatarOffline: {
    (argsTypes: IAvatarProps): JSX.Element;
    storyName: string;
    args: {
        online: boolean;
    };
};
export declare const AvatarWithNumber: {
    (argsTypes: IAvatarProps): JSX.Element;
    storyName: string;
    args: {
        numberIndicator: number;
    };
};
export declare const AvatarWithDefaultBadge: {
    (argsTypes: IAvatarProps): JSX.Element;
    storyName: string;
    args: {
        badgeIconName: string;
    };
};
export declare const AvatarWithSpecialBadge: {
    (argsTypes: IAvatarProps): JSX.Element;
    storyName: string;
    args: {
        badgeIconName: string;
    };
};
//# sourceMappingURL=Avatar.stories.d.ts.map