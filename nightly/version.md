commit 3bcfd1d26b8520b73be336558f590e1b89c4d0c3
Author: Georgieva <lidiya.georgieva@sap.com>
Date:   Tue Nov 26 11:43:29 2024 +0200

    fix(ui5-radio-button): fix aria-disabled and focus of the read-only radio buttons (#10111)
    
    * fix(ui5-radio-button): fix aria-disabled and focus of the read-only radio buttons
    
    This pull request fixes two issues:
    1. radio buttons cannot be focused using the keyboard
    2. radio buttons lack the aria-disabled attribute
    and the screen reader doesn't announce that they
    can't be selected
    
    fixes: #10025
