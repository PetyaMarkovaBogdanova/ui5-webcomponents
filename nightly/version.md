commit a73dd60ee9449656272895057ded3b8afee9ab8c
Author: Stoyan <88034608+hinzzx@users.noreply.github.com>
Date:   Tue Sep 24 16:59:06 2024 +0300

    fix(ui5-file-uploader): remove the cloning of the value state message (#9915)
    
    The valueStateMessage slot content no longer needs to be cloned, as the ui5-popover is now integrated into the component’s shadow root through the new Popover API.
