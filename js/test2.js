Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext', '/js/extjs');
Ext.require([
    '*'
]);

Ext.onReady(function(){
      var button = Ext.create('Ext.button.Button', { 
        text: 'Показать',
        handler: function() {
                var login = childPanel1.getForm();
                login.submit({
                    url: 'go.php',
                    success: function (form, action) { 
                        //alert (action)        
                        Ext.define('User1', {
                             extend: 'Ext.data.Model',
                          
                             fields: [
                                   {
                                    name: 'id',
                                    type: 'int'
                                   },{
                                    name: 'name',
                                    type: 'string'
                                   },{
                                    name: 'education',
                                    type: 'string'
                                    
                                   },{
                                    name: 'city',
                                    type: 'string'
                                   }]
                          });
      var fields = [ {name: 'id'},
                      {name: 'name', type: 'string'},
                      {name: 'education', type: 'string'},
                      {name: 'city', type: 'string'}  // тип данных
    ];
       
       var store1 = Ext.create('Ext.data.ArrayStore', {
                  model: 'User1',
                 //fields: fields,
                  autoLoad: true,
                  autoSync: true,
                  data: action.result.users,
                  listeners:{
                     write:function(store, operation) { //
                                                      updat=operation.records[0].data;
                                                      Ext.Ajax.request({
                                                      url: 'go1.php?id='+updat.id+"&education="+updat.education,
                                                      success: function(){
                                                            /////////////////
                                                               var ii=1;  
                                                                     Ext.Ajax.request({
                                                                             url: 'serch1.php',
                                                                             success: function(response, options){
                                                                             var objAjax = Ext.decode(response.responseText)
            
                                                                             for (i in objAjax) { 
                                                                             sss[ii] = {
                                                                             xtype: 'checkbox',
                                                                             boxLabel: objAjax[i],
                                                                             name:'education'+i ,
                                                                             checked:'true',
                                                                             inputValue: objAjax[i],
                                                                             width:220
                                                                                  };ii++
                                                                                 }
                    
                                                                              var box1=new Ext.form.CheckboxGroup({
                                                                                      fieldLabel: 'Образование',
                                                                                      id:'Education',
                                                                                      columns: 1,
                                                                                      margin: 5 ,
                                                                                      style:'margin-left:100px;',
                                                                                      items: sss
                                                                                   });
                                                                             Ext.get('Education').remove();
                                                                             Ext.getCmp('bigPannel1').add(box1)                        

                                                                                  },
                                                                      failure: function(response, options){
             
                                                                                 }
    });     

                                                      }          
                                                                       });
                                                      
                                                      }
                  }   
    
});
 //console.info(action.result.users) ; 
        
   var tab1=Ext.create('Ext.grid.Panel', {
        plugins:[{
            ptype:'rowediting',
            clicksToEdit: 1
                }],
        title: 'Пользователи',
        id:'grid',
        height: 200,
       // width: 400,
        store: store1,
        columns: [{
            header: 'id',
            dataIndex: 'id'
        },{
            header: 'Имя',
            dataIndex: 'name'
        }, {
            header: 'Образование',
            dataIndex: 'education',
            editor: {
                    allowBlank: false
                 }
        }, {
            header: 'Город',
            dataIndex: 'city',
         }],
       
    });
    Ext.get('grid').remove();
    Ext.getCmp('bigPannel2').add(tab1)

                            },
                    failure: function () {             }
                });
                            }
            
  });


 var childPanel1 = Ext.create('Ext.form.Panel', {
        id : 'bigPannel1',
        title: 'Выберите интересующие параметры',
        collapsible: true,
        layout: {type: 'hbox',
                align: 'stretch'}
         });
     
    var childPanel2 = Ext.create('Ext.panel.Panel', {
        id : 'bigPannel2',
       
    }); 
    
    
var ss =new Array; var ss1 =new Array; var ss2 =new Array; ss3 =new Array; sss =new Array;  ii=1; per=0;
      
 Ext.Ajax.request({
        url: 'serch.php',
        success: function(response, options){
          var objAjax = Ext.decode(response.responseText)
          
          for (i in objAjax) { 
                      ss[ii] = {
                      xtype: 'checkbox',
                      boxLabel: objAjax[i],
                      name: 'name'+i ,
                      inputValue: i, 
                      checked:'true',
                      width:220,
                      
                      };
          ii++
        }
                    
        var box=new Ext.form.CheckboxGroup({
                     fieldLabel: 'Юзер',
                     id:'User',
                     columns: 1,
                     margin: '5',
                     items: ss
                     });
                     
       var bb= Ext.create('Ext.container.Viewport', {
                      id : 'bigPannel',
                      layout: {
                            type: 'vbox',
                            align: 'stretch'
                       },
                       items: [ childPanel1,childPanel2 ]
             });
        Ext.getCmp('bigPannel1').add(box)                        
        },
        failure: function(response, options){
             
        }
});  
  
     
   
 var ii=1;  
 Ext.Ajax.request({
        url: 'serch1.php',
        success: function(response, options){
          var objAjax = Ext.decode(response.responseText)
            
            for (i in objAjax) { 
            ss1[ii] = {
            xtype: 'checkbox',
            boxLabel: objAjax[i],
            name:'education'+i ,
            checked:'true',
            inputValue: objAjax[i],
            width:220
             
           };ii++
                               }
                    
      var box1=new Ext.form.CheckboxGroup({
                     fieldLabel: 'Образование',
                     id:'Education',
                     columns: 1,
                     margin: 5 ,
                     style:'margin-left:100px;',
                     items: ss1
                     });
         Ext.getCmp('bigPannel1').add(box1)                        

        },
        failure: function(response, options){
             
        }
    });     

 var ii=1
 Ext.Ajax.request({
        url: 'serch2.php',
        success: function(response, options){
          var objAjax = Ext.decode(response.responseText)
         
          for (i in objAjax) { 
            ss2[ii] = {
            xtype: 'checkbox',
            boxLabel: objAjax[i],
            name:'city'+i,
            checked:'true',
            inputValue: objAjax[i],
            width:220
             
           };ii++
                               }
                    
      var box1=new Ext.form.CheckboxGroup({
                     fieldLabel: 'Города',
                     id:'City',
                     columns: 1,
                     margin: 5 ,
                     style:'margin-left:100px;',
                     items: ss2
                     });
        
             Ext.getCmp('bigPannel1').add(box1)                        

        },
        failure: function(response, options){
             
        }
    }); 
   var ij=0; 
  
    /////////////////////////////////
  
Ext.define('User', {
           extend: 'Ext.data.Model',
           idProperty: 'id',
                     
            fields: [
             {
                name: 'id',
                type: 'string'
            },{
                name: 'name',
                type: 'string'
            }, {
                name: 'education',
                type: 'string',
                flex:1
            }, {
                name: 'city',
                type: 'string'
            }]
      });
                 
       var store = Ext.create('Ext.data.Store', {
                    model: 'User',
                    autoLoad: true,
                    autoSync: true,
                    proxy: {
                            type: 'ajax',
                            api:{
                                 read:'grid.php?act=read',
                                 update:'grid.php?act=update'
                                },
                            reader: {
                                type: 'json',
                                root: 'users'
                            }
                }
        });

   var tab=Ext.create('Ext.grid.Panel', {
        id: 'grid',
        title: 'Пользователи',
        plugins:[{
            ptype:'rowediting',
            clicksToEdit: 1
                }],
        height: 200,
        store: store,
        columns: [{
            header: 'id',
            dataIndex: 'id'
        },{
            header: 'Имя',
            dataIndex: 'name'
        }, {
            header: 'Образование',
            dataIndex: 'education',
            editor: {
                    allowBlank: false
                 }
        }, {
            header: 'Город',
            dataIndex: 'city',
                    },{
                     xtype:'actioncolumn',
                     width:40,
                      
                    }],
        //renderTo: 'test1'
    });
    Ext.getCmp('bigPannel2').add(tab)
    Ext.getCmp('bigPannel1').add(button)  
    /////////////////////////////////
    
  
});