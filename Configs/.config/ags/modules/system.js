// This is for the right pill of the bar.
// For the cool memory indicator on the sidebar, see sysinfo.js
import { Service, Utils, Widget } from "../imports.js";
const { exec, execAsync } = Utils;
import Battery from "resource:///com/github/Aylur/ags/service/battery.js";

export const ModuleSystem = () =>
  Widget.EventBox({
    onScrollUp: () => execAsync("hyprctl dispatch workspace -1"),
    onScrollDown: () => execAsync("hyprctl dispatch workspace +1"),
    child: Widget.Box({
      className: "bar-group-margin bar-sides",
      children: [
        Widget.Box({
          className:
            "bar-group bar-group-standalone bar-group-pad-system spacing-h-15",
          children: [
            Widget.Box({ // Clock
              valign: "center",
              className: "spacing-h-5",
              children: [
                Widget.Label({
                  className: "bar-clock",
                  connections: [[5000, (label) => {
                    execAsync([`date`, "+%H:%M"]).then((timeString) => {
                      label.label = timeString;
                    }).catch(print);
                  }]],
                }),
                Widget.Label({
                  className: "txt-norm txt",
                  label: "•",
                }),
                Widget.Label({
                  className: "txt-smallie txt",
                  connections: [[5000, (label) => {
                    execAsync([`date`, "+%A, %d/%m"]).then((dateString) => {
                      label.label = dateString;
                    }).catch(print);
                  }]],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
