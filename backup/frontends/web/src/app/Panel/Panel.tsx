/*
 * Copyright (c) 2023 YourDash contributors.
 * YourDash is licensed under the MIT License.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React, { useEffect, useState } from "react";
import csi from "../../helpers/csi";
import { useNavigate } from "react-router-dom";
import clippy from "../../helpers/clippy";
import { IconButton, RightClickMenu } from "../../ui";
import PanelApplicationLauncher from "./launcher/PanelLaunchers";
import PanelDesktopIndicator from "./psa/PanelDesktopIndicator";
import styles from "./Panel.module.scss";
import { YourDashIcon } from "../../ui/components/icon/iconDictionary";

export enum PanelPosition {
  left,
  top,
  right,
  bottom,
}

export interface IPanel {
  side: PanelPosition;
  setSide: ( side: PanelPosition ) => void;
}

interface IPanelQuickShortcut {
  displayName: string;
  url: string;
  icon: string;
}

const PanelQuickShortcuts: React.FC<{
  num: number;
  side: PanelPosition
}> = ( {
  num,
  side
} ) => {
  const navigate = useNavigate();
  const [quickShortcuts, setQuickShortcuts] = useState<IPanelQuickShortcut[]>(
    []
  );
  
  useEffect( () => {
    csi.getJson( "/core/panel/quick-shortcuts", resp => setQuickShortcuts( resp ) );
  }, [num] );
  
  return (
    <>
      {quickShortcuts.map( ( shortcut, ind ) => (
        <RightClickMenu
          key={shortcut.url}
          items={[
            {
              name: "Unpin from panel",
              onClick() {
                csi.deleteJson( `/core/panel/quick-shortcuts${ ind }`, () => {
                  // @ts-ignore
                  // eslint-disable-next-line @typescript-eslint/no-use-before-define
                  Panel.reload();
                } );
              }
            }
          ]}
        >
          <button
            type={"button"}
            className={styles.quickShortcut}
            onClick={e => {
              e.currentTarget.blur();
              navigate( shortcut.url );
            }}
          >
            <img
              draggable={false}
              src={shortcut.icon}
              alt=""
              className={styles.quickShortcutIcon}
            />
            <span
              className={clippy(
                styles.quickShortcutLabel,
                side === PanelPosition.left && styles.quickShortcutLabelLeft,
                side === PanelPosition.top && styles.quickShortcutLabelTop,
                side === PanelPosition.right && styles.quickShortcutLabelRight,
                side === PanelPosition.bottom && styles.quickShortcutLabelBottom
              )}
            >
              {shortcut.displayName}
            </span>
          </button>
        </RightClickMenu>
      ) )}
    </>
  );
};

const PanelInstanceIcon: React.FC = () => {
  const navigate = useNavigate();
  const [instanceUrl, setInstanceUrl] = useState<string | null>( null );
  
  useEffect( () => {
    setInstanceUrl( localStorage.getItem( "current_server" ) );
  }, [] );
  
  if ( !instanceUrl ) {
    return <div/>;
  }
  
  return (
    <button
      type={"button"}
      className={"border-none !bg-transparent"}
      onClick={() => navigate( "/app/a/dash" )}
    >
      <img
        src={`${ instanceUrl }/core/panel/logo/small`}
        alt={""}
        className={"cursor-pointer select-none w-8"}
      />
    </button>
  );
};

const PanelAuthorizer: React.FC = () => {
  const navigate = useNavigate();
  
  const TIME_UNTIL_CONSOLE_CLEAR = 1000;
  
  useEffect( () => {
    if ( !localStorage.getItem( "current_server" ) ) {
      setTimeout( () => {
        console.clear();
      }, TIME_UNTIL_CONSOLE_CLEAR );
      navigate( "/login" );
    } else {
      csi.getJson(
        "/core/login/is-authenticated",
        () => {
          csi.getUserDB();
        },
        () => {
          setTimeout( () => {
            console.clear();
          }, TIME_UNTIL_CONSOLE_CLEAR );
          localStorage.removeItem( "session_token" );
          navigate( "/login/server" );
        }
      );
    }
    
    // eslint-ignore-next-line react-hooks/exhaustive-deps
  }, [] );
  
  return null;
};

export interface YourDashLauncherApplication {
  name: string;
  displayName: string;
  icon: string;
  description: string;
}

const Panel: React.FC<IPanel> = ( {
  side,
  setSide
} ) => {
  const [num, setNum] = useState<number>( 0 );
  const [launcherType, setLauncherType] = useState<number>( 0 );
  
  //  @ts-ignore
  Panel.reload = () => {
    setNum( num + 1 );
  };
  
  useEffect( () => {
    csi.getJson( "/core/panel/position", res => {
      setSide( res.position );
    } );
    
    csi.getJson( "/core/panel/quick-shortcuts", res => {
      setLauncherType( res.launcher );
    } );
  }, [num] ); // eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <div
      className={clippy(
        "animate__animated animate__fadeIn",
        side === PanelPosition.top && styles.sideTop,
        side === PanelPosition.bottom && styles.sideBottom,
        side === PanelPosition.left && styles.sideLeft,
        side === PanelPosition.right && styles.sideRight,
        styles.panel
      )}
    >
      <section className={styles.panelSectionStart}>
        {/* invisible components which checks that the user is authorized on the first load of the panel*/}
        <PanelAuthorizer/>
        <PanelApplicationLauncher num={num} side={side} type={launcherType}/>
        <PanelInstanceIcon/>
        {/* separator */}
        <div
          className={
            clippy(
              styles.separator,
              side === PanelPosition.top || side === PanelPosition.bottom ? styles.separatorHorizontal : styles.separatorVertical
            )
          }
        />
        <PanelQuickShortcuts num={num} side={side}/>
      </section>
      <section
        className={clippy(
          side === PanelPosition.left || side === PanelPosition.right
            ? styles.panelTrayVertical
            : styles.panelTrayHorizontal,
          styles.panelTray
        )}
      >
        <PanelDesktopIndicator side={side}/>
        {/* TODO: feature idea, Quick search ( basically just opens a command panel for all of YourDash ) */}
        <IconButton icon={YourDashIcon.Search16} className={"!w-[2rem] !h-[2rem]"}/>
      </section>
    </div>
  );
};

export default Panel;