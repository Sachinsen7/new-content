"use client"

import { useState } from "react"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { AdminLayout } from "@/components/admin/admin-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Save, Bell, Shield, Database, Mail } from "lucide-react"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    siteName: "Code & Content Studio",
    adminEmail: "admin@codecontentstudio.com",
    notificationsEnabled: true,
    emailNotifications: true,
    autoBackup: true,
    maintenanceMode: false,
  })

  const handleSave = () => {
    // In a real app, this would save to a database
    console.log("Settings saved:", settings)
    alert("Settings saved successfully!")
  }

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2 text-[#eceafa]">Settings</h1>
              <p className="text-[#88adce]">Manage your admin panel and system settings</p>
            </div>
            <Button onClick={handleSave} className="bg-[#88adce] text-[#000000] hover:bg-[#4d93cb]">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>

          <Tabs defaultValue="general" className="space-y-6">
            <TabsList className="bg-[#88adce]/10 border border-[#88adce]/20">
              <TabsTrigger
                value="general"
                className="data-[state=active]:bg-[#88adce] data-[state=active]:text-[#000000] text-[#eceafa]"
              >
                General
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                className="data-[state=active]:bg-[#88adce] data-[state=active]:text-[#000000] text-[#eceafa]"
              >
                Notifications
              </TabsTrigger>
              <TabsTrigger
                value="security"
                className="data-[state=active]:bg-[#88adce] data-[state=active]:text-[#000000] text-[#eceafa]"
              >
                Security
              </TabsTrigger>
              <TabsTrigger
                value="system"
                className="data-[state=active]:bg-[#88adce] data-[state=active]:text-[#000000] text-[#eceafa]"
              >
                System
              </TabsTrigger>
            </TabsList>

            <TabsContent value="general">
              <Card className="bg-[#000000] border-[#88adce]/20">
                <CardHeader>
                  <CardTitle className="text-[#eceafa]">General Settings</CardTitle>
                  <CardDescription className="text-[#88adce]">Basic configuration for your admin panel</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="site-name" className="text-[#eceafa]">
                        Site Name
                      </Label>
                      <Input
                        id="site-name"
                        value={settings.siteName}
                        onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                        className="bg-[#000000] border-[#88adce]/30 text-[#eceafa]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="admin-email" className="text-[#eceafa]">
                        Admin Email
                      </Label>
                      <Input
                        id="admin-email"
                        type="email"
                        value={settings.adminEmail}
                        onChange={(e) => setSettings({ ...settings, adminEmail: e.target.value })}
                        className="bg-[#000000] border-[#88adce]/30 text-[#eceafa]"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="company-description" className="text-[#eceafa]">
                      Company Description
                    </Label>
                    <Textarea
                      id="company-description"
                      placeholder="Brief description of your company..."
                      rows={4}
                      className="bg-[#000000] border-[#88adce]/30 text-[#eceafa] placeholder:text-[#88adce]/60"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications">
              <Card className="bg-[#000000] border-[#88adce]/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-[#eceafa]">
                    <Bell className="h-5 w-5 mr-2" />
                    Notification Settings
                  </CardTitle>
                  <CardDescription className="text-[#88adce]">Configure how you receive notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-[#eceafa]">Push Notifications</Label>
                      <p className="text-sm text-[#88adce]">Receive notifications in the admin panel</p>
                    </div>
                    <Switch
                      checked={settings.notificationsEnabled}
                      onCheckedChange={(checked) => setSettings({ ...settings, notificationsEnabled: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-[#eceafa]">Email Notifications</Label>
                      <p className="text-sm text-[#88adce]">Receive notifications via email</p>
                    </div>
                    <Switch
                      checked={settings.emailNotifications}
                      onCheckedChange={(checked) => setSettings({ ...settings, emailNotifications: checked })}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security">
              <Card className="bg-[#000000] border-[#88adce]/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-[#eceafa]">
                    <Shield className="h-5 w-5 mr-2" />
                    Security Settings
                  </CardTitle>
                  <CardDescription className="text-[#88adce]">Manage security and access controls</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="current-password" className="text-[#eceafa]">
                      Current Password
                    </Label>
                    <Input
                      id="current-password"
                      type="password"
                      placeholder="Enter current password"
                      className="bg-[#000000] border-[#88adce]/30 text-[#eceafa] placeholder:text-[#88adce]/60"
                    />
                  </div>
                  <div>
                    <Label htmlFor="new-password" className="text-[#eceafa]">
                      New Password
                    </Label>
                    <Input
                      id="new-password"
                      type="password"
                      placeholder="Enter new password"
                      className="bg-[#000000] border-[#88adce]/30 text-[#eceafa] placeholder:text-[#88adce]/60"
                    />
                  </div>
                  <div>
                    <Label htmlFor="confirm-password" className="text-[#eceafa]">
                      Confirm New Password
                    </Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="Confirm new password"
                      className="bg-[#000000] border-[#88adce]/30 text-[#eceafa] placeholder:text-[#88adce]/60"
                    />
                  </div>
                  <Button className="bg-[#88adce] text-[#000000] hover:bg-[#4d93cb]">Update Password</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="system">
              <Card className="bg-[#000000] border-[#88adce]/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-[#eceafa]">
                    <Database className="h-5 w-5 mr-2" />
                    System Settings
                  </CardTitle>
                  <CardDescription className="text-[#88adce]">System maintenance and backup settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-[#eceafa]">Auto Backup</Label>
                      <p className="text-sm text-[#88adce]">Automatically backup data daily</p>
                    </div>
                    <Switch
                      checked={settings.autoBackup}
                      onCheckedChange={(checked) => setSettings({ ...settings, autoBackup: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-[#eceafa]">Maintenance Mode</Label>
                      <p className="text-sm text-[#88adce]">Put the site in maintenance mode</p>
                    </div>
                    <Switch
                      checked={settings.maintenanceMode}
                      onCheckedChange={(checked) => setSettings({ ...settings, maintenanceMode: checked })}
                    />
                  </div>
                  <div className="pt-4 border-t border-[#88adce]/20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button
                        variant="outline"
                        className="border-[#88adce]/30 text-[#eceafa] hover:bg-[#88adce]/10 bg-transparent"
                      >
                        <Database className="h-4 w-4 mr-2" />
                        Backup Now
                      </Button>
                      <Button
                        variant="outline"
                        className="border-[#88adce]/30 text-[#eceafa] hover:bg-[#88adce]/10 bg-transparent"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Test Email
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  )
}
