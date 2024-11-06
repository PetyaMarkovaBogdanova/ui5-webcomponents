commit a7c765efce1d1474231f889141f75d96dab30ba7
Author: Plamen Ivanov <plamen.ivanov01@sap.com>
Date:   Wed Nov 6 13:40:45 2024 +0200

    chore: updated sample file (#10136)
    
    * Add shellbar additional context separators (#10108)
    
    * feat(ui5-shellbar): added arrow navigation
    
    * refactor(ui5-shellbar): start and end separators
    
    ---------
    
    Co-authored-by: yanaminkova <yana.minkova@sap.com>
    Co-authored-by: PetyaMarkovaBogdanova <petya.markova@sap.com>
    
    * feat(ui5-shellbar): added applySideNavigationStyles property
    
    The new applySideNavigationStyles makes sure to apply the correct
    CSS paddings/styles to the ShellBar specified by visual design
    when ShellBar is used as adjacent to ui5-side-navigation.
    
    * chore: ShellBar sample updated
    
    ShellBar is now a header slot to NavigationLayout in its sample HTML file.
    
    Additionally the padding specific styling for it is changed in
    NavigationLayout CSS to implement visual spec.
    
    * chore: shellBar is now a header slot to NavigationLayout in its sample HTML file
    Additionally the padding specific styling for it is changed in
    NavigationLayout CSS to implement visual spec.
    
    ---------
    
    Co-authored-by: Petya Markova <petya.markova-bogdanova@sap.com>
    Co-authored-by: yanaminkova <yana.minkova@sap.com>
    Co-authored-by: PetyaMarkovaBogdanova <petya.markova@sap.com>
