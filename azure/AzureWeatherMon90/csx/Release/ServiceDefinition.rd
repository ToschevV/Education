<?xml version="1.0" encoding="utf-8"?>
<serviceModel xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" name="AzureWeatherMon90" generation="1" functional="0" release="0" Id="17449fd8-10ec-4ef2-a1b6-ea20d33a4b28" dslVersion="1.2.0.0" xmlns="http://schemas.microsoft.com/dsltools/RDSM">
  <groups>
    <group name="AzureWeatherMon90Group" generation="1" functional="0" release="0">
      <componentports>
        <inPort name="WeaherMonWeb:Endpoint1" protocol="http">
          <inToChannel>
            <lBChannelMoniker name="/AzureWeatherMon90/AzureWeatherMon90Group/LB:WeaherMonWeb:Endpoint1" />
          </inToChannel>
        </inPort>
      </componentports>
      <settings>
        <aCS name="WeaherMonWeb:APPINSIGHTS_INSTRUMENTATIONKEY" defaultValue="">
          <maps>
            <mapMoniker name="/AzureWeatherMon90/AzureWeatherMon90Group/MapWeaherMonWeb:APPINSIGHTS_INSTRUMENTATIONKEY" />
          </maps>
        </aCS>
        <aCS name="WeaherMonWeb:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" defaultValue="">
          <maps>
            <mapMoniker name="/AzureWeatherMon90/AzureWeatherMon90Group/MapWeaherMonWeb:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" />
          </maps>
        </aCS>
        <aCS name="WeaherMonWebInstances" defaultValue="[1,1,1]">
          <maps>
            <mapMoniker name="/AzureWeatherMon90/AzureWeatherMon90Group/MapWeaherMonWebInstances" />
          </maps>
        </aCS>
        <aCS name="WeatherMonWorker:APPINSIGHTS_INSTRUMENTATIONKEY" defaultValue="">
          <maps>
            <mapMoniker name="/AzureWeatherMon90/AzureWeatherMon90Group/MapWeatherMonWorker:APPINSIGHTS_INSTRUMENTATIONKEY" />
          </maps>
        </aCS>
        <aCS name="WeatherMonWorker:Kazan" defaultValue="">
          <maps>
            <mapMoniker name="/AzureWeatherMon90/AzureWeatherMon90Group/MapWeatherMonWorker:Kazan" />
          </maps>
        </aCS>
        <aCS name="WeatherMonWorker:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" defaultValue="">
          <maps>
            <mapMoniker name="/AzureWeatherMon90/AzureWeatherMon90Group/MapWeatherMonWorker:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" />
          </maps>
        </aCS>
        <aCS name="WeatherMonWorker:Mosсow" defaultValue="">
          <maps>
            <mapMoniker name="/AzureWeatherMon90/AzureWeatherMon90Group/MapWeatherMonWorker:Mosсow" />
          </maps>
        </aCS>
        <aCS name="WeatherMonWorker:NumMinutes" defaultValue="">
          <maps>
            <mapMoniker name="/AzureWeatherMon90/AzureWeatherMon90Group/MapWeatherMonWorker:NumMinutes" />
          </maps>
        </aCS>
        <aCS name="WeatherMonWorkerInstances" defaultValue="[1,1,1]">
          <maps>
            <mapMoniker name="/AzureWeatherMon90/AzureWeatherMon90Group/MapWeatherMonWorkerInstances" />
          </maps>
        </aCS>
      </settings>
      <channels>
        <lBChannel name="LB:WeaherMonWeb:Endpoint1">
          <toPorts>
            <inPortMoniker name="/AzureWeatherMon90/AzureWeatherMon90Group/WeaherMonWeb/Endpoint1" />
          </toPorts>
        </lBChannel>
      </channels>
      <maps>
        <map name="MapWeaherMonWeb:APPINSIGHTS_INSTRUMENTATIONKEY" kind="Identity">
          <setting>
            <aCSMoniker name="/AzureWeatherMon90/AzureWeatherMon90Group/WeaherMonWeb/APPINSIGHTS_INSTRUMENTATIONKEY" />
          </setting>
        </map>
        <map name="MapWeaherMonWeb:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" kind="Identity">
          <setting>
            <aCSMoniker name="/AzureWeatherMon90/AzureWeatherMon90Group/WeaherMonWeb/Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" />
          </setting>
        </map>
        <map name="MapWeaherMonWebInstances" kind="Identity">
          <setting>
            <sCSPolicyIDMoniker name="/AzureWeatherMon90/AzureWeatherMon90Group/WeaherMonWebInstances" />
          </setting>
        </map>
        <map name="MapWeatherMonWorker:APPINSIGHTS_INSTRUMENTATIONKEY" kind="Identity">
          <setting>
            <aCSMoniker name="/AzureWeatherMon90/AzureWeatherMon90Group/WeatherMonWorker/APPINSIGHTS_INSTRUMENTATIONKEY" />
          </setting>
        </map>
        <map name="MapWeatherMonWorker:Kazan" kind="Identity">
          <setting>
            <aCSMoniker name="/AzureWeatherMon90/AzureWeatherMon90Group/WeatherMonWorker/Kazan" />
          </setting>
        </map>
        <map name="MapWeatherMonWorker:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" kind="Identity">
          <setting>
            <aCSMoniker name="/AzureWeatherMon90/AzureWeatherMon90Group/WeatherMonWorker/Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" />
          </setting>
        </map>
        <map name="MapWeatherMonWorker:Mosсow" kind="Identity">
          <setting>
            <aCSMoniker name="/AzureWeatherMon90/AzureWeatherMon90Group/WeatherMonWorker/Mosсow" />
          </setting>
        </map>
        <map name="MapWeatherMonWorker:NumMinutes" kind="Identity">
          <setting>
            <aCSMoniker name="/AzureWeatherMon90/AzureWeatherMon90Group/WeatherMonWorker/NumMinutes" />
          </setting>
        </map>
        <map name="MapWeatherMonWorkerInstances" kind="Identity">
          <setting>
            <sCSPolicyIDMoniker name="/AzureWeatherMon90/AzureWeatherMon90Group/WeatherMonWorkerInstances" />
          </setting>
        </map>
      </maps>
      <components>
        <groupHascomponents>
          <role name="WeaherMonWeb" generation="1" functional="0" release="0" software="c:\Users\v-vltosh\Documents\Visual Studio 2017\Projects\AzureWeatherMon90\AzureWeatherMon90\csx\Release\roles\WeaherMonWeb" entryPoint="base\x64\WaHostBootstrapper.exe" parameters="base\x64\WaIISHost.exe " memIndex="-1" hostingEnvironment="frontendadmin" hostingEnvironmentVersion="2">
            <componentports>
              <inPort name="Endpoint1" protocol="http" portRanges="80" />
            </componentports>
            <settings>
              <aCS name="APPINSIGHTS_INSTRUMENTATIONKEY" defaultValue="" />
              <aCS name="Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" defaultValue="" />
              <aCS name="__ModelData" defaultValue="&lt;m role=&quot;WeaherMonWeb&quot; xmlns=&quot;urn:azure:m:v1&quot;&gt;&lt;r name=&quot;WeaherMonWeb&quot;&gt;&lt;e name=&quot;Endpoint1&quot; /&gt;&lt;/r&gt;&lt;r name=&quot;WeatherMonWorker&quot; /&gt;&lt;/m&gt;" />
            </settings>
            <resourcereferences>
              <resourceReference name="DiagnosticStore" defaultAmount="[4096,4096,4096]" defaultSticky="true" kind="Directory" />
              <resourceReference name="EventStore" defaultAmount="[1000,1000,1000]" defaultSticky="false" kind="LogStore" />
            </resourcereferences>
          </role>
          <sCSPolicy>
            <sCSPolicyIDMoniker name="/AzureWeatherMon90/AzureWeatherMon90Group/WeaherMonWebInstances" />
            <sCSPolicyUpdateDomainMoniker name="/AzureWeatherMon90/AzureWeatherMon90Group/WeaherMonWebUpgradeDomains" />
            <sCSPolicyFaultDomainMoniker name="/AzureWeatherMon90/AzureWeatherMon90Group/WeaherMonWebFaultDomains" />
          </sCSPolicy>
        </groupHascomponents>
        <groupHascomponents>
          <role name="WeatherMonWorker" generation="1" functional="0" release="0" software="c:\Users\v-vltosh\Documents\Visual Studio 2017\Projects\AzureWeatherMon90\AzureWeatherMon90\csx\Release\roles\WeatherMonWorker" entryPoint="base\x64\WaHostBootstrapper.exe" parameters="base\x64\WaWorkerHost.exe " memIndex="-1" hostingEnvironment="consoleroleadmin" hostingEnvironmentVersion="2">
            <settings>
              <aCS name="APPINSIGHTS_INSTRUMENTATIONKEY" defaultValue="" />
              <aCS name="Kazan" defaultValue="" />
              <aCS name="Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" defaultValue="" />
              <aCS name="Mosсow" defaultValue="" />
              <aCS name="NumMinutes" defaultValue="" />
              <aCS name="__ModelData" defaultValue="&lt;m role=&quot;WeatherMonWorker&quot; xmlns=&quot;urn:azure:m:v1&quot;&gt;&lt;r name=&quot;WeaherMonWeb&quot;&gt;&lt;e name=&quot;Endpoint1&quot; /&gt;&lt;/r&gt;&lt;r name=&quot;WeatherMonWorker&quot; /&gt;&lt;/m&gt;" />
            </settings>
            <resourcereferences>
              <resourceReference name="DiagnosticStore" defaultAmount="[4096,4096,4096]" defaultSticky="true" kind="Directory" />
              <resourceReference name="EventStore" defaultAmount="[1000,1000,1000]" defaultSticky="false" kind="LogStore" />
            </resourcereferences>
          </role>
          <sCSPolicy>
            <sCSPolicyIDMoniker name="/AzureWeatherMon90/AzureWeatherMon90Group/WeatherMonWorkerInstances" />
            <sCSPolicyUpdateDomainMoniker name="/AzureWeatherMon90/AzureWeatherMon90Group/WeatherMonWorkerUpgradeDomains" />
            <sCSPolicyFaultDomainMoniker name="/AzureWeatherMon90/AzureWeatherMon90Group/WeatherMonWorkerFaultDomains" />
          </sCSPolicy>
        </groupHascomponents>
      </components>
      <sCSPolicy>
        <sCSPolicyUpdateDomain name="WeaherMonWebUpgradeDomains" defaultPolicy="[5,5,5]" />
        <sCSPolicyUpdateDomain name="WeatherMonWorkerUpgradeDomains" defaultPolicy="[5,5,5]" />
        <sCSPolicyFaultDomain name="WeaherMonWebFaultDomains" defaultPolicy="[2,2,2]" />
        <sCSPolicyFaultDomain name="WeatherMonWorkerFaultDomains" defaultPolicy="[2,2,2]" />
        <sCSPolicyID name="WeaherMonWebInstances" defaultPolicy="[1,1,1]" />
        <sCSPolicyID name="WeatherMonWorkerInstances" defaultPolicy="[1,1,1]" />
      </sCSPolicy>
    </group>
  </groups>
  <implements>
    <implementation Id="8981bcea-d19f-45c4-90a0-188237d8b944" ref="Microsoft.RedDog.Contract\ServiceContract\AzureWeatherMon90Contract@ServiceDefinition">
      <interfacereferences>
        <interfaceReference Id="cd3aa8f9-d3d2-48d4-b757-eb61ac5ddba1" ref="Microsoft.RedDog.Contract\Interface\WeaherMonWeb:Endpoint1@ServiceDefinition">
          <inPort>
            <inPortMoniker name="/AzureWeatherMon90/AzureWeatherMon90Group/WeaherMonWeb:Endpoint1" />
          </inPort>
        </interfaceReference>
      </interfacereferences>
    </implementation>
  </implements>
</serviceModel>